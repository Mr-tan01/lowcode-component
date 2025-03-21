export declare const funcDomainIcons: Record<string, () => Promise<string>>;
export declare const eventDomainIcons: Record<string, () => Promise<string>>;
export declare const innerImageDomain: {
    readonly func: {
        readonly add: "add";
        readonly caretDown: "caret-down";
        readonly caretSort: "caret-sort";
        readonly caretUp: "caret-up";
        readonly chevronDown: "chevron-down";
        readonly chevronUp: "chevron-up";
        readonly helpCircle: "help-circle";
        readonly infoCircle: "info-circle";
        readonly internet: "internet";
        readonly laptop: "laptop";
        readonly layers: "layers";
        readonly location: "location";
        readonly refresh: "refresh";
        readonly remove: "remove";
        readonly search: "search";
        readonly time: "time";
        readonly blueLArrow: "blue-l-arrow";
        readonly blueRArrow: "blue-r-arrow";
        readonly pause: "pause";
    };
    readonly event: {
        readonly domain: "domain";
        readonly style: "style";
        readonly person: "person";
        readonly gate: "gate";
        readonly building: "building";
        readonly mentor: "mentor";
        readonly person2: "person2";
        readonly reward: "reward";
    };
};
type InnerImageDomain = typeof innerImageDomain;
type ReadValue<T> = T[keyof T];
export type Domains = keyof InnerImageDomain;
export type NameTypeFunc<D extends Domains> = ReadValue<InnerImageDomain[D]>;
export type NameTypes = NameTypeFunc<'event'> | NameTypeFunc<'func'>;
export declare function useImage<D extends Domains>(domain: D, name: NameTypeFunc<D>, ext?: string): {
    src: import('vue').Ref<string, string>;
    selectedSrc: import('vue').Ref<string, string>;
};
export {};
