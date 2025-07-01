export declare function useStarRotate(): {
    getTextStyle: (index: number) => {
        transform: string
    }
    starLneght: import('vue').Ref<number, number>
    starWrapperRef: import('vue').ShallowRef<
        HTMLElement | undefined,
        HTMLElement | undefined
    >
    angleOffset: import('vue').Ref<number, number>
    customRotateStyle: (index: number) =>
        | {
              'left': string
              'top': string
              'opacity': number
              'zIndex': number
              'transform'?: undefined
              '--z-index-number'?: undefined
          }
        | {
              'left': string
              'top': string
              'transform': string
              'opacity': number
              '--z-index-number': number
              'zIndex'?: undefined
          }
    starElRefs: import('vue').ShallowRef<
        HTMLElement[] | undefined,
        HTMLElement[] | undefined
    >
    averageAngle: import('vue').ComputedRef<number>
    startAngle: import('vue').Ref<number, number>
    starMaxShowCount: import('vue').Ref<number, number>
    displayAlternately: import('vue').Ref<number[], number[]>
    fullAngle: import('vue').Ref<number, number>
}
