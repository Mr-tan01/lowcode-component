import { Domains, NameTypes } from '../icon';
export declare const robotBQMap: {
    s1: string;
    s2: string;
    s3: string;
    s4: string;
    s5: string;
};
export type RobotBQMapKeys = keyof typeof robotBQMap;
type ReadValue<T> = T[keyof T];
export declare const imageShowTrigger: {
    readonly none: "none";
    readonly hover: "hover";
};
export type ImageShowTrigger = ReadValue<typeof imageShowTrigger>;
export declare const imageHideDir: {
    readonly lt: "lt";
    readonly rt: "rt";
    readonly auto: "auto";
};
export type ImageHideDir = ReadValue<typeof imageHideDir>;
export type StarItemType = {
    key?: string | number;
    label: string;
};
export type StarType = {
    key: string | number;
    domain: Domains;
    name: NameTypes;
    size: number | string;
    meta: StarItemType[];
};
export declare const defStarData: StarType[];
export {};
