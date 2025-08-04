import { RobotBQMapKeys, ImageShowTrigger, ImageHideDir } from './const';
import { AiConfigProps } from './types';
type __VLS_Props = {
    src?: string;
    value?: RobotBQMapKeys;
    width?: string;
    height?: string;
    trigger?: ImageShowTrigger;
    hidDir?: ImageHideDir;
    showPopup?: boolean;
    aiConfig?: AiConfigProps;
    popupContextMaxH: string;
    draggable?: boolean;
    position?: 'relative' | 'absolute' | 'fixed';
};
type __VLS_PublicProps = {
    'isShow'?: boolean;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:isShow": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:isShow"?: ((value: boolean) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
