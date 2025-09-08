import { ref, reactive, computed } from "vue";
const dragHistoryKey = "__localStorage:dragHistory__";
function useDragRobotPosition() {
  const isDraging = ref(false);
  const robotOffset = reactive({ x: 100, y: "80%" });
  try {
    const historyData = localStorage.getItem(dragHistoryKey);
    if (historyData) {
      const _history = JSON.parse(historyData);
      robotOffset.x = _history.x;
      robotOffset.y = parseInt(_history.y) > innerHeight ? "80%" : _history.y;
    }
  } catch {
    console.warn("获取拖拽历史数据失败，使用默认值");
  }
  const xAdsorptionDir = computed(() => robotOffset.x <= 0 ? "lt" : "rt");
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
    const yRatio = Math.min(Math.max(event.clientY / window.innerHeight, 0), 1);
    const targetY = `${15 + yRatio * 85}%`;
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
