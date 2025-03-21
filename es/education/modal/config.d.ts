export declare const sizeModeEnum: {
    readonly large: "large";
    readonly medium: "medium";
    readonly custom: "custom";
    readonly a169: "a169";
};
type SizeModeValue<T> = T[keyof T];
type SizeMode = SizeModeValue<typeof sizeModeEnum>;
export type Options = {
    sizeMode: SizeMode;
    size: {
        [sizeModeEnum.large]: {
            width: number;
            height: number;
        };
        [sizeModeEnum.medium]: {
            width: number;
            height: number;
        };
        [sizeModeEnum.a169]: {
            width: number;
            height: number;
        };
    };
    bgImgs: Record<SizeMode, string>;
};
export declare const options: Options;
export {};
