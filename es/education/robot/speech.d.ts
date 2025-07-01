export declare function useSpeech(): {
    isSupport: boolean
    recognition: any
    start: () => void
    stop: () => void
    output: import('vue').Ref<
        {
            textContent: string
            helpText: string
            starting: boolean
            error: boolean
        },
        | {
              textContent: string
              helpText: string
              starting: boolean
              error: boolean
          }
        | {
              textContent: string
              helpText: string
              starting: boolean
              error: boolean
          }
    >
    off: (name: any) => void
    on: (name: string, callback: (...args: any[]) => void) => void
}
