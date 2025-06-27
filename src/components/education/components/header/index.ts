import LcHeader, { NavData as LcHeaderType } from './header.vue';

export type HeaderInstanceType = InstanceType<typeof LcHeader>;

export {
    LcHeader,
    type LcHeaderType,
};

export * from './header.vue';