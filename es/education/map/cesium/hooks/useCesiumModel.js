import { ref, computed, watch, onBeforeUnmount, nextTick } from "vue";
import { useMessage } from "naive-ui";
import { Cesium3DTileset, Cartesian3, Matrix4, Cartographic, Math as Math$1, Transforms, Matrix3, HeadingPitchRoll, Color, ShadowMode, HeadingPitchRange, Resource } from "@cesium/engine";
import { Viewer } from "@cesium/widgets";
const speedStepMap = {
  slow: {
    height: 1,
    rotate: 5,
    zoom: 50
  },
  normal: {
    height: 5,
    rotate: 10,
    zoom: 100
  },
  fast: {
    height: 10,
    rotate: 20,
    zoom: 200
  }
};
function useCesiumModel(props, visible, emit) {
  const message = useMessage();
  const rootRef = ref(null);
  const containerRef = ref(null);
  const viewer = ref(null);
  const tileset = ref(null);
  const loading = ref(false);
  const retrying = ref(false);
  const loadError = ref(null);
  const runtimeToken = ref(props.token);
  const lightingEnabled = ref(props.enhance3D ?? true);
  const shadowsEnabled = ref(props.enableShadows ?? true);
  const heightControl = ref(props.heightOffset);
  const headingControl = ref(props.heading);
  const scaleControl = ref(props.scale);
  const initialModelMatrix = ref(null);
  const initialCameraDestination = ref(null);
  const sourceModelCenter = ref(null);
  const loadedUrl = ref("");
  const reloadSeed = ref(0);
  const loadRequestId = ref(0);
  const autoRotating = ref(false);
  const fullscreen = ref(false);
  const opening = ref(false);
  const locateFrame = ref(null);
  let autoRotateTimer = null;
  let modelRenderWaitCleanup = null;
  let rejectModelRenderWait = null;
  const speedStep = computed(() => {
    const preset = speedStepMap[props.operationSpeed ?? "normal"];
    return {
      ...preset,
      rotate: props.rotateStep ?? preset.rotate
    };
  });
  const loadStatusText = computed(() => {
    var _a, _b, _c;
    if (retrying.value) return ((_a = props.display) == null ? void 0 : _a.retryDescription) ?? `正在重新加载：${props.title}`;
    if (loading.value) return ((_b = props.display) == null ? void 0 : _b.loadingDescription) ?? `加载中：${props.title}`;
    if (loadError.value) return ((_c = props.display) == null ? void 0 : _c.errorDescription) ?? `模型加载失败`;
    if (tileset.value) return `加载完成：${props.title}`;
    return `未加载：${props.title}`;
  });
  const sceneBackgroundColor = computed(() => {
    var _a;
    return ((_a = props.display) == null ? void 0 : _a.sceneBackgroundColor) ?? "#ffffff";
  });
  const loadErrorMessage = computed(() => {
    var _a;
    if (!loadError.value) return "";
    if (loadError.value instanceof Error) return loadError.value.message;
    if (typeof loadError.value === "string") return loadError.value;
    if (typeof loadError.value === "object") {
      const error = loadError.value;
      const status = error.status ?? error.statusCode ?? ((_a = error.response) == null ? void 0 : _a.status);
      const message2 = error.message ?? error.errorMessage ?? error.statusText ?? error.detail;
      if (typeof message2 === "string" && /Request has failed/i.test(message2)) return "";
      if (message2 && status) return `${message2} (${status})`;
      if (message2) return String(message2);
      if (status) return `请求失败 (${status})`;
    }
    return "";
  });
  const getResolvedToken = () => runtimeToken.value ?? props.token;
  const syncControlsFromProps = () => {
    heightControl.value = props.heightOffset;
    headingControl.value = props.heading;
    scaleControl.value = props.scale;
    lightingEnabled.value = props.enhance3D ?? true;
    shadowsEnabled.value = props.enableShadows ?? true;
  };
  const layerOption = computed(() => ({
    layerId: props.layerId,
    version: props.version,
    appId: props.appId,
    token: getResolvedToken(),
    baseUrl: props.baseUrl,
    tilesetFile: props.tilesetFile,
    longitudeOffset: props.longitudeOffset,
    latitudeOffset: props.latitudeOffset,
    heightOffset: heightControl.value ?? 0,
    fitToGround: props.fitToGround,
    groundHeight: props.groundHeight,
    modelBaseHeight: props.modelBaseHeight,
    heading: headingControl.value ?? 0,
    pitch: props.pitch,
    roll: props.roll,
    scale: scaleControl.value ?? 1,
    enhance3D: lightingEnabled.value,
    enableShadows: shadowsEnabled.value,
    options: props.options ?? props.modelOptions
  }));
  const replaceUrlPlaceholders = (url, option) => {
    const tilesetFile = option.tilesetFile ?? "tileset.json";
    return url.replaceAll("{node}", encodeURIComponent(option.layerId)).replaceAll("{node1}", tilesetFile).replaceAll("{client_id}", encodeURIComponent(option.appId ?? "")).replaceAll("{access_token}", encodeURIComponent(option.token ?? ""));
  };
  const getTilesetPath = (option) => {
    const tilesetFile = option.tilesetFile ?? "tileset.json";
    const baseUrl = (option.baseUrl ?? "").replace(/\/$/, "");
    const version = option.version ?? "v2";
    if (baseUrl.includes("{node}")) {
      return replaceUrlPlaceholders(baseUrl, option);
    }
    if (baseUrl.endsWith("/v1") || baseUrl.endsWith("/v2/SZ3DTiles")) {
      return `${baseUrl}/${encodeURIComponent(option.layerId)}/3DTilesServer/${tilesetFile}`;
    }
    if (version === "v1") {
      return `${baseUrl}/v1/${encodeURIComponent(option.layerId)}/3DTilesServer/${tilesetFile}`;
    }
    return `${baseUrl}/v2/SZ3DTiles/${encodeURIComponent(option.layerId)}/3DTilesServer/${tilesetFile}`;
  };
  const getTilesetResource = (option) => {
    const queryParameters = {};
    const url = getTilesetPath(option);
    loadedUrl.value = url;
    if (option.appId && !url.includes("client_id=")) {
      queryParameters.client_id = option.appId;
    }
    if (option.token && !url.includes("access_token=")) {
      queryParameters.access_token = option.token;
    }
    queryParameters._reload = String(reloadSeed.value);
    return new Resource({
      url,
      queryParameters
    });
  };
  const clearTilesetFailureListener = () => {
    if (tileset.value && tilesetFailureListener.value) {
      tileset.value.tileFailed.removeEventListener(tilesetFailureListener.value);
    }
    tilesetFailureListener.value = null;
  };
  const tilesetFailureListener = ref(null);
  const bindTilesetFailureListener = (model) => {
    clearTilesetFailureListener();
    const onTileFailed = (error) => {
      if (model !== tileset.value) return;
      if (loadError.value) return;
      if (rejectModelRenderWait) {
        rejectModelRenderWait(error);
        return;
      }
      console.error("模型瓦片加载失败:", error);
      message.error("模型加载失败");
      loadError.value = error;
      clearTilesetFailureListener();
      removeModel();
      emit("loadError", error);
    };
    tilesetFailureListener.value = onTileFailed;
    model.tileFailed.addEventListener(onTileFailed);
  };
  const destroyTileset = (model) => {
    const destroy = model.destroy;
    if (typeof destroy === "function") {
      destroy.call(model);
    }
  };
  const clearModelRenderWait = () => {
    if (modelRenderWaitCleanup) {
      modelRenderWaitCleanup();
    }
    modelRenderWaitCleanup = null;
    rejectModelRenderWait = null;
  };
  const waitForModelRendered = (model, isCurrentLoad) => {
    clearModelRenderWait();
    return new Promise((resolve, reject) => {
      let settled = false;
      let renderTimeout = null;
      let noVisibleTileTimeout = null;
      let hasVisibleTile = false;
      let pendingPostRenderViewer = null;
      let pendingPostRenderListener = null;
      const cleanup = () => {
        model.initialTilesLoaded.removeEventListener(onReady);
        model.allTilesLoaded.removeEventListener(onReady);
        model.tileVisible.removeEventListener(onTileVisible);
        model.loadProgress.removeEventListener(onLoadProgress);
        if (pendingPostRenderViewer && pendingPostRenderListener) {
          pendingPostRenderViewer.scene.postRender.removeEventListener(pendingPostRenderListener);
        }
        pendingPostRenderViewer = null;
        pendingPostRenderListener = null;
        if (renderTimeout !== null) {
          window.clearTimeout(renderTimeout);
          renderTimeout = null;
        }
        if (noVisibleTileTimeout !== null) {
          window.clearTimeout(noVisibleTileTimeout);
          noVisibleTileTimeout = null;
        }
      };
      const settle = (callback) => {
        if (settled) return;
        settled = true;
        cleanup();
        modelRenderWaitCleanup = null;
        rejectModelRenderWait = null;
        callback();
      };
      const resolveAfterRenderedFrame = () => {
        if (!isCurrentLoad()) {
          settle(() => resolve());
          return;
        }
        const currentViewer = viewer.value;
        if (!currentViewer) {
          settle(() => resolve());
          return;
        }
        const onPostRender = () => {
          currentViewer.scene.postRender.removeEventListener(onPostRender);
          pendingPostRenderViewer = null;
          pendingPostRenderListener = null;
          settle(() => resolve());
        };
        pendingPostRenderViewer = currentViewer;
        pendingPostRenderListener = onPostRender;
        currentViewer.scene.postRender.addEventListener(onPostRender);
        currentViewer.scene.requestRender();
      };
      const onReady = () => {
        if (hasVisibleTile) {
          resolveAfterRenderedFrame();
        }
      };
      const onTileVisible = () => {
        hasVisibleTile = true;
        resolveAfterRenderedFrame();
      };
      const rejectWithoutVisibleTile = () => {
        if (settled || hasVisibleTile || !isCurrentLoad()) return;
        settle(() => reject(new Error("模型瓦片未渲染，请重试")));
      };
      const scheduleNoVisibleTileCheck = () => {
        if (hasVisibleTile || noVisibleTileTimeout !== null) return;
        noVisibleTileTimeout = window.setTimeout(() => {
          noVisibleTileTimeout = null;
          rejectWithoutVisibleTile();
        }, 1200);
      };
      const onLoadProgress = (numberOfPendingRequests, numberOfTilesProcessing) => {
        if (numberOfPendingRequests === 0 && numberOfTilesProcessing === 0) {
          if (hasVisibleTile) {
            resolveAfterRenderedFrame();
            return;
          }
          scheduleNoVisibleTileCheck();
        }
      };
      modelRenderWaitCleanup = cleanup;
      rejectModelRenderWait = (error) => {
        settle(() => reject(error));
      };
      renderTimeout = window.setTimeout(() => {
        settle(() => reject(new Error("模型加载超时，请重试")));
      }, 6e4);
      model.initialTilesLoaded.addEventListener(onReady);
      model.allTilesLoaded.addEventListener(onReady);
      model.tileVisible.addEventListener(onTileVisible);
      model.loadProgress.addEventListener(onLoadProgress);
    });
  };
  const getModelBaseHeight = (model, option) => {
    var _a;
    if (typeof option.modelBaseHeight === "number") {
      return option.modelBaseHeight;
    }
    const rootBoundingVolume = (_a = model.root) == null ? void 0 : _a._boundingVolume;
    if (typeof (rootBoundingVolume == null ? void 0 : rootBoundingVolume.minimumHeight) === "number") {
      return rootBoundingVolume.minimumHeight;
    }
    return void 0;
  };
  const getGroundHeight = (longitude, latitude, option) => {
    var _a;
    if (typeof option.groundHeight === "number") {
      return option.groundHeight;
    }
    return ((_a = viewer.value) == null ? void 0 : _a.scene.globe.getHeight(new Cartographic(longitude, latitude))) ?? 0;
  };
  const getTargetHeight = (model, sourceCartographic, longitude, latitude, option) => {
    const heightOffset = option.heightOffset ?? 0;
    if (!option.fitToGround) {
      return sourceCartographic.height + heightOffset;
    }
    const modelBaseHeight = getModelBaseHeight(model, option);
    const groundHeight = getGroundHeight(longitude, latitude, option);
    if (modelBaseHeight === void 0) {
      return groundHeight + heightOffset;
    }
    return groundHeight + (sourceCartographic.height - modelBaseHeight) + heightOffset;
  };
  const applyModelTransform = () => {
    var _a, _b;
    if (!tileset.value) return;
    const option = layerOption.value;
    const sourceCenter = sourceModelCenter.value ? Cartesian3.clone(sourceModelCenter.value) : Cartesian3.clone(tileset.value.boundingSphere.center);
    const sourceCartographic = Cartographic.fromCartesian(sourceCenter);
    const longitude = sourceCartographic.longitude + Math$1.toRadians(option.longitudeOffset ?? 0);
    const latitude = sourceCartographic.latitude + Math$1.toRadians(option.latitudeOffset ?? 0);
    const targetHeight = getTargetHeight(tileset.value, sourceCartographic, longitude, latitude, option);
    const targetCenter = Cartesian3.fromRadians(longitude, latitude, targetHeight);
    const scale = option.scale ?? 1;
    const hasRotation = !!(option.heading || option.pitch || option.roll);
    if (!hasRotation && scale === 1) {
      const translation = Cartesian3.subtract(targetCenter, sourceCenter, new Cartesian3());
      tileset.value.modelMatrix = Matrix4.fromTranslation(translation);
      (_a = viewer.value) == null ? void 0 : _a.scene.requestRender();
      return;
    }
    const sourceFrame = Transforms.eastNorthUpToFixedFrame(sourceCenter);
    const targetFrame = Transforms.eastNorthUpToFixedFrame(targetCenter);
    const sourceFrameInverse = Matrix4.inverseTransformation(sourceFrame, new Matrix4());
    const localRotation = Matrix3.fromHeadingPitchRoll(
      new HeadingPitchRoll(
        Math$1.toRadians(option.heading ?? 0),
        Math$1.toRadians(option.pitch ?? 0),
        Math$1.toRadians(option.roll ?? 0)
      )
    );
    if (scale !== 1) {
      Matrix3.multiplyByScale(localRotation, new Cartesian3(scale, scale, scale), localRotation);
    }
    const localTransform = Matrix4.fromRotationTranslation(localRotation);
    const targetTransform = Matrix4.multiply(targetFrame, localTransform, new Matrix4());
    tileset.value.modelMatrix = Matrix4.multiply(targetTransform, sourceFrameInverse, new Matrix4());
    (_b = viewer.value) == null ? void 0 : _b.scene.requestRender();
  };
  const applySceneEffect = () => {
    if (!viewer.value) return;
    viewer.value.scene.globe.enableLighting = lightingEnabled.value;
    viewer.value.shadows = shadowsEnabled.value;
    viewer.value.scene.globe.depthTestAgainstTerrain = false;
    viewer.value.scene.globe.show = false;
    if (viewer.value.scene.skyBox) {
      viewer.value.scene.skyBox.show = false;
    }
    if (viewer.value.scene.skyAtmosphere) {
      viewer.value.scene.skyAtmosphere.show = false;
    }
    viewer.value.scene.backgroundColor = Color.fromCssColorString(sceneBackgroundColor.value);
    viewer.value.scene.globe.baseColor = Color.fromCssColorString(sceneBackgroundColor.value);
    if (tileset.value) {
      tileset.value.shadows = shadowsEnabled.value ? ShadowMode.ENABLED : ShadowMode.DISABLED;
    }
    viewer.value.scene.requestRender();
  };
  const initViewer = async () => {
    if (viewer.value || !containerRef.value) return;
    const nextViewer = new Viewer(containerRef.value, {
      animation: false,
      timeline: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      fullscreenButton: false,
      selectionIndicator: false,
      infoBox: false,
      baseLayer: false,
      terrainProvider: props.terrainProvider,
      scene3DOnly: true,
      requestRenderMode: true,
      maximumRenderTimeChange: 1,
      contextOptions: {
        webgl: {
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true
        }
      }
    });
    nextViewer.scene.backgroundColor = Color.fromCssColorString(sceneBackgroundColor.value);
    nextViewer.scene.globe.baseColor = Color.fromCssColorString(sceneBackgroundColor.value);
    nextViewer.scene.globe.show = false;
    nextViewer.scene.globe.depthTestAgainstTerrain = false;
    if (nextViewer.scene.skyBox) {
      nextViewer.scene.skyBox.show = false;
    }
    if (nextViewer.scene.skyAtmosphere) {
      nextViewer.scene.skyAtmosphere.show = false;
    }
    viewer.value = nextViewer;
    applySceneEffect();
  };
  const cancelLocateFrame = () => {
    if (locateFrame.value !== null) {
      window.cancelAnimationFrame(locateFrame.value);
      locateFrame.value = null;
    }
  };
  const stopAutoRotate = () => {
    if (autoRotateTimer) {
      window.clearInterval(autoRotateTimer);
      autoRotateTimer = null;
    }
    autoRotating.value = false;
  };
  const removeModel = () => {
    stopAutoRotate();
    cancelLocateFrame();
    clearTilesetFailureListener();
    if (viewer.value && tileset.value) {
      viewer.value.scene.primitives.remove(tileset.value);
      viewer.value.scene.requestRender();
    }
    tileset.value = null;
    initialModelMatrix.value = null;
    sourceModelCenter.value = null;
  };
  const locateModel = (options) => {
    if (!viewer.value || !tileset.value) return;
    if (options == null ? void 0 : options.afterLayout) {
      cancelLocateFrame();
      locateFrame.value = window.requestAnimationFrame(() => {
        locateFrame.value = null;
        locateModel({ recordInitialView: options.recordInitialView });
      });
      return;
    }
    const modelRadius = Math.max(tileset.value.boundingSphere.radius, 1);
    viewer.value.resize();
    viewer.value.camera.viewBoundingSphere(
      tileset.value.boundingSphere,
      new HeadingPitchRange(0, Math$1.toRadians(-35), Math.max(modelRadius * 2.2, 80))
    );
    viewer.value.camera.lookAtTransform(Matrix4.IDENTITY);
    if (options == null ? void 0 : options.recordInitialView) {
      initialCameraDestination.value = Cartesian3.clone(viewer.value.camera.positionWC);
    }
    viewer.value.scene.requestRender();
  };
  const refreshTokenIfNeeded = async (forceRefresh = false) => {
    if (!forceRefresh || !props.tokenLoader) return;
    const nextToken = await props.tokenLoader();
    if (!nextToken) {
      throw new Error("重新获取 token 失败");
    }
    runtimeToken.value = nextToken;
  };
  const loadModel = async (options = {}) => {
    if (!props.layerId) {
      loadError.value = new Error("模型图层 ID 不存在");
      loading.value = false;
      retrying.value = false;
      return;
    }
    if (!viewer.value) {
      loadError.value = new Error("模型容器初始化失败");
      loading.value = false;
      retrying.value = false;
      return;
    }
    const currentLoadRequestId = ++loadRequestId.value;
    const isCurrentLoad = () => currentLoadRequestId === loadRequestId.value && visible.value && !!viewer.value;
    if (!options.keepErrorVisible) {
      loadError.value = null;
    }
    loading.value = true;
    removeModel();
    try {
      await refreshTokenIfNeeded(options.forceRefreshToken ?? false);
      const model = await Cesium3DTileset.fromUrl(getTilesetResource(layerOption.value), {
        maximumScreenSpaceError: 2,
        dynamicScreenSpaceError: true,
        ...props.options ?? {},
        ...props.modelOptions ?? {},
        show: true
      });
      if (!isCurrentLoad()) {
        destroyTileset(model);
        return;
      }
      const renderReady = waitForModelRendered(model, isCurrentLoad);
      tileset.value = model;
      sourceModelCenter.value = Cartesian3.clone(model.boundingSphere.center);
      viewer.value.scene.primitives.add(model);
      bindTilesetFailureListener(model);
      applyModelTransform();
      applySceneEffect();
      initialModelMatrix.value = Matrix4.clone(model.modelMatrix);
      locateModel({ afterLayout: true, recordInitialView: true });
      viewer.value.scene.requestRender();
      await renderReady;
      if (!isCurrentLoad()) return;
      emit("loaded", { tileset: model, url: loadedUrl.value });
    } catch (error) {
      if (!isCurrentLoad()) return;
      console.error("模型加载失败:", error);
      message.error("模型加载失败");
      loadError.value = error;
      removeModel();
      emit("loadError", error);
    } finally {
      if (isCurrentLoad()) {
        loading.value = false;
        retrying.value = false;
      }
    }
  };
  const destroyViewer = () => {
    loadRequestId.value += 1;
    clearModelRenderWait();
    stopAutoRotate();
    cancelLocateFrame();
    removeModel();
    if (viewer.value && !viewer.value.isDestroyed()) {
      viewer.value.destroy();
    }
    viewer.value = null;
  };
  const openModel = async () => {
    if (opening.value) return;
    opening.value = true;
    syncControlsFromProps();
    try {
      await nextTick();
      await initViewer();
      await loadModel();
    } finally {
      opening.value = false;
    }
  };
  const reloadModel = async () => {
    reloadSeed.value += 1;
    retrying.value = true;
    loading.value = true;
    loadError.value = null;
    await nextTick();
    destroyViewer();
    await nextTick();
    await initViewer();
    await loadModel({ forceRefreshToken: true, keepErrorVisible: true });
  };
  const resetView = () => {
    if (!viewer.value) return;
    if (initialCameraDestination.value) {
      viewer.value.camera.setView({
        destination: initialCameraDestination.value
      });
      viewer.value.scene.requestRender();
      return;
    }
    locateModel();
  };
  const zoomIn = () => {
    var _a, _b;
    (_a = viewer.value) == null ? void 0 : _a.camera.zoomIn(speedStep.value.zoom);
    (_b = viewer.value) == null ? void 0 : _b.scene.requestRender();
  };
  const zoomOut = () => {
    var _a, _b;
    (_a = viewer.value) == null ? void 0 : _a.camera.zoomOut(speedStep.value.zoom);
    (_b = viewer.value) == null ? void 0 : _b.scene.requestRender();
  };
  const rotateLeft = () => {
    headingControl.value = (headingControl.value ?? 0) - speedStep.value.rotate;
  };
  const rotateRight = () => {
    headingControl.value = (headingControl.value ?? 0) + speedStep.value.rotate;
  };
  const raiseModel = () => {
    heightControl.value = (heightControl.value ?? 0) + speedStep.value.height;
  };
  const lowerModel = () => {
    heightControl.value = (heightControl.value ?? 0) - speedStep.value.height;
  };
  const startAutoRotate = () => {
    stopAutoRotate();
    autoRotating.value = true;
    autoRotateTimer = window.setInterval(() => {
      rotateRight();
    }, props.autoRotateInterval ?? 200);
  };
  const toggleAutoRotate = () => {
    if (autoRotating.value) {
      stopAutoRotate();
      return;
    }
    startAutoRotate();
  };
  const resetTransform = () => {
    var _a;
    stopAutoRotate();
    heightControl.value = props.heightOffset;
    headingControl.value = props.heading;
    scaleControl.value = props.scale;
    if (tileset.value && initialModelMatrix.value) {
      tileset.value.modelMatrix = Matrix4.clone(initialModelMatrix.value);
      (_a = viewer.value) == null ? void 0 : _a.scene.requestRender();
    }
  };
  const refreshViewerSize = () => {
    var _a, _b;
    (_a = viewer.value) == null ? void 0 : _a.resize();
    (_b = viewer.value) == null ? void 0 : _b.scene.requestRender();
  };
  const toggleFullscreen = async () => {
    if (!rootRef.value) return;
    if (!document.fullscreenElement) {
      await rootRef.value.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
    await nextTick();
    refreshViewerSize();
    locateModel({ afterLayout: true });
  };
  const handleFullscreenChange = () => {
    fullscreen.value = document.fullscreenElement === rootRef.value;
    refreshViewerSize();
  };
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  watch(
    visible,
    (value) => {
      if (value) {
        void openModel();
      } else {
        destroyViewer();
        retrying.value = false;
      }
    },
    { immediate: true }
  );
  watch(
    () => [props.version, props.layerId, props.appId, props.token, props.baseUrl, props.tilesetFile],
    () => {
      runtimeToken.value = props.token;
      syncControlsFromProps();
      if (visible.value && viewer.value) {
        void loadModel();
      }
    }
  );
  watch([heightControl, headingControl, scaleControl], () => {
    applyModelTransform();
  });
  watch([lightingEnabled, shadowsEnabled], () => {
    applySceneEffect();
  });
  onBeforeUnmount(() => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
    stopAutoRotate();
    destroyViewer();
  });
  return {
    rootRef,
    containerRef,
    viewer,
    tileset,
    loading,
    retrying,
    loadError,
    loadErrorMessage,
    loadStatusText,
    autoRotating,
    fullscreen,
    reloadModel,
    locateModel,
    resetView,
    zoomIn,
    zoomOut,
    rotateLeft,
    rotateRight,
    raiseModel,
    lowerModel,
    resetTransform,
    toggleAutoRotate,
    toggleFullscreen
  };
}
export {
  useCesiumModel
};
