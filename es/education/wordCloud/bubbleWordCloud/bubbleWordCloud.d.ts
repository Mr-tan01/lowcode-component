type WordCloudData = {
    name: string;
    value: number;
    color?: string;
};
type __VLS_Props = {
    gridSize: number;
    maxWord?: number;
    data?: WordCloudData[];
    ballSize?: number;
    title?: string;
    tooltip?: {
        formatter: (record: WordCloudData, index: number) => string;
    };
    word?: {
        formatter?: (record: WordCloudData, index: number) => string;
    };
    enableAnimate?: boolean;
    animateSpeed?: number;
    animateStep?: number;
    type?: 'text' | 'text-circle' | 'circle' | 'shadow';
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (record: WordCloudData, index: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClick?: ((record: WordCloudData, index: number) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    wordCloudWrapper: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
