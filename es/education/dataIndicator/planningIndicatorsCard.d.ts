export type Item = {
    title: string;
    value: number;
    unit: string;
    decimal?: number;
    maxLength?: number;
};
export type Data = {
    header: string;
    icon: string;
    leftItem: Item;
    rightItem: Item;
};
type __VLS_Props = {
    unit?: string;
    fixed?: boolean;
    data: Data;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
