export declare const sizeModeEnum: {
    readonly large: 'large'
    readonly medium: 'medium'
    readonly custom: 'custom'
    readonly a169: 'a169'
}
type SizeModeValue<T> = T[keyof T]
type SizeMode = SizeModeValue<typeof sizeModeEnum>
export type Options = {
    sizeMode: SizeMode
    size: {
        [sizeModeEnum.large]: {
            width: string
            height: string
            headerWidth: string
        }
        [sizeModeEnum.medium]: {
            width: string
            height: string
            headerWidth: string
        }
        [sizeModeEnum.a169]: {
            width: string
            height: string
            headerWidth: string
        }
    }
    bgImgs: Record<SizeMode, string>
}
export declare const options: Options
export {}
