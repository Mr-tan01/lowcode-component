import { ref as a } from "vue";
const v = 2e3;
function x() {
  let r = !1;
  const i = (
    // @ts-expect-error SpeechRecognition 可能未定义
    window.SpeechRecognition || window.webkitSpeechRecognition
  );
  if (!i)
    r = !1;
  else {
    let l = function(t, s) {
      o.has(t) || o.set(t, s);
    }, u = function(t) {
      o.has(t) && o.delete(t);
    }, c = function() {
      if (!r)
        return alert("您的浏览器不支持 SpeechRecognition API");
      e.value.starting || (e.value.starting = !0, e.value.error = !1, n.start(), e.value.helpText = "正在聆听...");
    }, f = function() {
      e.value.starting = !1, n.stop(), e.value.helpText = "已停止聆听", setTimeout(p, v);
    }, p = function() {
      e.value.helpText = "";
    };
    r = !0;
    const e = a({
      textContent: "",
      helpText: "",
      starting: !1,
      error: !1
    }), o = /* @__PURE__ */ new Map(), n = new i();
    return n.lang = "zh-CN", n.interimResults = !0, n.maxAlternatives = 1, n.addEventListener("result", (t) => {
      const s = t.results[0][0].transcript;
      e.value.textContent = s, o.forEach((h) => h(s));
    }), n.addEventListener("error", (t) => {
      e.value.helpText = "发生错误: " + t.error + "。", e.value.error = !0, e.value.starting = !1;
    }), {
      isSupport: r,
      recognition: n,
      start: c,
      stop: f,
      output: e,
      off: u,
      on: l
    };
  }
  return {
    isSupport: r,
    recognition: null,
    start: () => {
    },
    stop: () => {
    },
    output: a({
      helpText: "",
      textContent: "",
      starting: !1,
      error: !1
    }),
    off: () => {
    },
    on: () => {
    }
  };
}
export {
  x as useSpeech
};
