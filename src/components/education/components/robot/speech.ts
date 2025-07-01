import { ref } from 'vue'

const timeoutTime = 2000 // 帮助文本显示时间
export function useSpeech() {
    let isSupport = false
    // 检查浏览器是否支持 SpeechRecognition

    const SpeechRecognition =
        // @ts-expect-error SpeechRecognition 可能未定义
        window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
        isSupport = false
    } else {
        isSupport = true
        const output = ref({
            textContent: '',
            helpText: '',
            starting: false,
            error: false,
        })

        const events = new Map()

        function on(name: string, callback: (...args: any[]) => void) {
            if (!events.has(name)) {
                events.set(name, callback)
            }
        }
        function off(name) {
            if (events.has(name)) {
                events.delete(name)
            }
        }

        const recognition = new SpeechRecognition()
        recognition.lang = 'zh-CN' // 设置语言为中文
        recognition.interimResults = true // 设置为 true 可以实时获取中间结果
        recognition.maxAlternatives = 1 // 设置最大返回结果数量

        function start() {
            if (!isSupport) {
                return alert('您的浏览器不支持 SpeechRecognition API')
            }
            if (output.value.starting) return
            output.value.starting = true
            output.value.error = false
            recognition.start()
            output.value.helpText = '正在聆听...'
        }

        function stop() {
            output.value.starting = false
            recognition.stop()
            output.value.helpText = '已停止聆听'
            setTimeout(clearHelpText, timeoutTime)
        }

        recognition.addEventListener('result', (event) => {
            const transcript = event.results[0][0].transcript
            output.value.textContent = transcript
            events.forEach((value) => value(transcript))
        })

        recognition.addEventListener('error', (event) => {
            output.value.helpText = '发生错误: ' + event.error + '。'
            output.value.error = true
            output.value.starting = false
        })

        function clearHelpText() {
            output.value.helpText = ''
        }

        return {
            isSupport,
            recognition,
            start,
            stop,
            output,
            off,
            on,
        }
    }
    return {
        isSupport,
        recognition: null,
        start: () => {},
        stop: () => {},
        output: ref({
            helpText: '',
            textContent: '',
            starting: false,
            error: false,
        }),
        off: () => {},
        on: () => {},
    }
}
