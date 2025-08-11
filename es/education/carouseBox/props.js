const propsRaw = {
  list: {
    type: Array,
    required: false
  },
  offsetAnimationTime: {
    type: Number
  },
  gap: {
    type: Number
  },
  rowKey: {
    type: Function,
    required: false
  },
  showTrack: {
    type: Boolean,
    required: false
  },
  disabled: {
    type: Boolean
  },
  // 是否追加元素居中显示
  backCenter: {
    type: Boolean,
    default: true
  }
};
export {
  propsRaw
};
