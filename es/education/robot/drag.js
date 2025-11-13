import { ref, reactive, computed } from "vue";
const dragHistoryKey = "__localStorage:dragHistory__";
function useDragRobotPosition(popupSize) {
  const isDraging = ref(false);
  const robotOffset = reactive({ x: 100, y: "20%" });
  try {
    const historyData = localStorage.getItem(dragHistoryKey);
    if (historyData) {
      const _history = JSON.parse(historyData);
      robotOffset.x = _history.x;
      robotOffset.y = _history.y;
    }
  } catch {
    console.warn("获取拖拽历史数据失败，使用默认值");
  }
  const xAdsorptionDir = computed(() => robotOffset.x <= 0 ? "lt" : "rt");
  const getPopupHeight = () => {
    const heights = {
      small: 120,
      medium: 319,
      large: 585
    };
    return heights[popupSize.value] || heights.small;
  };
  function startDrag() {
    isDraging.value = true;
  }
  function draging(event) {
    event.preventDefault();
  }
  function stopDrag(event) {
    event.preventDefault();
    isDraging.value = false;
    const targetX = event.clientX < window.innerWidth / 2 ? 0 : 100;
    const popupHeight = getPopupHeight();
    const robotHeight = 147;
    const minTop = 10;
    const maxTop = window.innerHeight - (popupHeight + robotHeight);
    let targetTop = Math.max(event.clientY, minTop);
    targetTop = Math.min(targetTop, Math.max(minTop, maxTop));
    const targetY = `${targetTop / window.innerHeight * 120}%`;
    robotOffset.x = targetX;
    robotOffset.y = targetY;
    localStorage.setItem(dragHistoryKey, JSON.stringify(robotOffset));
  }
  function dragenter() {
    console.log("拖拽进入");
  }
  function dragover(event) {
    event.preventDefault();
  }
  return {
    isDraging,
    startDrag,
    stopDrag,
    draging,
    dragenter,
    robotOffset,
    xAdsorptionDir,
    dragover
  };
}
export {
  useDragRobotPosition
};
