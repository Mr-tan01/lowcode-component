import { LcCarouseBoxChangeEvent } from '../carouseBox';
type ListRaw = {
    label: string;
    children: NavData[];
};
export type NavData = {
    label: string;
    path: string;
    list?: ListRaw[];
};
type __VLS_Props = {
    navDatas?: NavData[];
    hideArrow?: boolean;
};
type __VLS_PublicProps = {
    'index'?: number;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:index": (value: number) => any;
} & {
    scroll: (data: LcCarouseBoxChangeEvent) => any;
    jump: (parent: ListRaw | null, item: NavData, i: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:index"?: ((value: number) => any) | undefined;
    onScroll?: ((data: LcCarouseBoxChangeEvent) => any) | undefined;
    onJump?: ((parent: ListRaw | null, item: NavData, i: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
