export declare const sizeModeEnum: {
    readonly large: "large";
    readonly medium: "medium";
    readonly custom: "custom";
};
type SizeModeValue<T> = T[keyof T];
export type Options = {
    sizeMode: SizeModeValue<typeof sizeModeEnum>;
    size: {
        [sizeModeEnum.large]: {
            width: number;
            height: number;
        };
        [sizeModeEnum.medium]: {
            width: number;
            height: number;
        };
    };
};
export declare const options: Options;
export {};
