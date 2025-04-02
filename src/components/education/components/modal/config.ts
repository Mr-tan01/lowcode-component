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
            width: string;
            height: string;
            headerWidth: string;

        };
        [sizeModeEnum.medium]: {
            width: string;
            height: string;
            headerWidth: string;
        };
        [sizeModeEnum.a169]: {
            width: string;
            height: string;
            headerWidth: string;
        };
    };
    bgImgs: Record<SizeMode, string>;
}

export const options: Options = {
    size: {
        [sizeModeEnum.large]: {
            width: '1000px',
            height: '680px',
            headerWidth: '401px',
        },
        [sizeModeEnum.medium]: {
            width: '600px',
            height: '300px',
            headerWidth: '401px',
        },
        [sizeModeEnum.a169]: {
            width: '1520px',
            height: '683px',
            headerWidth: '450px',
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