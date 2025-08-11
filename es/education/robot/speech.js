import { ref } from "vue";
const timeoutTime = 2e3;
function useSpeech() {
  let isSupport = false;
  const SpeechRecognition = (
    // @ts-expect-error SpeechRecognition 可能未定义
    window.SpeechRecognition || window.webkitSpeechRecognition
  );
  if (!SpeechRecognition) {
    isSupport = false;
  } else {
    let on = function(name, callback) {
      if (!events.has(name)) {
        events.set(name, callback);
      }
    }, off = function(name) {
      if (events.has(name)) {
        events.delete(name);
      }
    }, start = function() {
      if (!isSupport) {
        return alert("您的浏览器不支持 SpeechRecognition API");
      }
      if (output.value.starting) return;
      output.value.starting = true;
      output.value.error = false;
      recognition.start();
      output.value.helpText = "正在聆听...";
    }, stop = function() {
      output.value.starting = false;
      recognition.stop();
      output.value.helpText = "已停止聆听";
      setTimeout(clearHelpText, timeoutTime);
    }, clearHelpText = function() {
      output.value.helpText = "";
    };
    isSupport = true;
    const output = ref({
      textContent: "",
      helpText: "",
      starting: false,
      error: false
    });
    const events = /* @__PURE__ */ new Map();
    const recognition = new SpeechRecognition();
    recognition.lang = "zh-CN";
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;
    recognition.addEventListener("result", (event) => {
      const transcript = event.results[0][0].transcript;
      output.value.textContent = transcript;
      events.forEach((value) => value(transcript));
    });
    recognition.addEventListener("error", (event) => {
      output.value.helpText = "发生错误: " + event.error + "。";
      output.value.error = true;
      output.value.starting = false;
    });
    return {
      isSupport,
      recognition,
      start,
      stop,
      output,
      off,
      on
    };
  }
  return {
    isSupport,
    recognition: null,
    start: () => {
    },
    stop: () => {
    },
    output: ref({
      helpText: "",
      textContent: "",
      starting: false,
      error: false
    }),
    off: () => {
    },
    on: () => {
    }
  };
}
export {
  useSpeech
};
