
export const sizeModeEnum = {
    large: 'large',
    medium: 'medium',
    custom: 'custom'  
} as const;

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
        }   
    }
}

export const options: Options = {
    size: {
        [sizeModeEnum.large]: {
            width: 1000,
            height: 680
        },
        [sizeModeEnum.medium]: {
            width: 600,
            height: 300
        }
    },
    sizeMode: sizeModeEnum.custom,
}