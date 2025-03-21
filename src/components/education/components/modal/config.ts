import largeBgImg from './images/large-bg.png';
import a169BgImg from './images/16x9.png';

export const sizeModeEnum = {
    large: 'large',
    medium: 'medium',
    custom: 'custom',
    a169: 'a169',
} as const;

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
        },
        [sizeModeEnum.a169]: {
            width: 1520,
            height: 683
        }
    },
    sizeMode: sizeModeEnum.custom,
    bgImgs: {
        [sizeModeEnum.large]: largeBgImg,
        [sizeModeEnum.medium]: largeBgImg,
        [sizeModeEnum.a169]: a169BgImg,
        custom: largeBgImg,
    }
}