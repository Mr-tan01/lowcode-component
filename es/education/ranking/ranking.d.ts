export type RankingRecord = {
    label: string;
    unit?: string | '{b}';
    value: number;
    formatter?: '{a}' | '{b}' | ((e: RankingRecord) => string | number);
};
type __VLS_Props = {
    list: RankingRecord[];
    sort?: 'order' | 'reverse' | 'none';
    animateIndex?: 0 | 1;
    type?: 'ranking' | 'proprotion';
    showBall?: boolean;
    maxProportion?: number;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
