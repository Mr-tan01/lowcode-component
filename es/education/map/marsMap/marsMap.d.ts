import * as mars2d from 'mars2d';
type __VLS_Props = {
    mapKey?: string;
    options?: mars2d.Map.Options;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onload: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOnload?: ((...args: any[]) => any) | undefined;
}>, {
    mapKey: string;
    options: mars2d.Map.Options;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
