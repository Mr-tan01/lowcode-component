import { ComputedRef, InjectionKey } from "vue";

export type InjectionKeyType = ComputedRef<{
    value: string | number;
    change(value: string | number): void;
}>;
export const radioButtonGroupProvideKey: InjectionKey<InjectionKeyType> = Symbol("radioButtonGroupInject");