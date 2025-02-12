import { type Domains, type NameTypes } from '@/components/education/components/icon';
export declare const robotBQMap: {
    s1: any;
    s2: any;
    s3: any;
    s4: any;
};
export type RobotBQMapKeys = keyof typeof robotBQMap;
type ReadValue<T> = T[keyof T];
export declare const imageShowTrigger: {
    readonly none: "none";
    readonly focus: "focus";
};
export type ImageShowTrigger = ReadValue<typeof imageShowTrigger>;
export declare const imageHideDir: {
    readonly lt: "lt";
    readonly rt: "rt";
    readonly auto: "auto";
};
export type ImageHideDir = ReadValue<typeof imageHideDir>;
export type StarType = {
    key: string | number;
    domain: Domains;
    name: NameTypes;
    size: number | string;
    meta: {
        label: string;
    }[];
};
export declare const defStarData: StarType[];
export {};
