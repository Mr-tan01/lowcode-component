const e = {
  list: {
    type: Array,
    required: !1
  },
  offsetAnimationTime: {
    type: Number
  },
  gap: {
    type: Number
  },
  rowKey: {
    type: Function,
    required: !1
  },
  showTrack: {
    type: Boolean,
    required: !1
  },
  disabled: {
    type: Boolean
  },
  // 是否追加元素居中显示
  backCenter: {
    type: Boolean,
    default: !0
  }
};
export {
  e as propsRaw
};
