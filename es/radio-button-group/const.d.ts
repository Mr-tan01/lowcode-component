import { ComputedRef, InjectionKey } from "vue";
export type InjectionKeyType = ComputedRef<{
    value: string | number;
    change(value: string | number): void;
}>;
export declare const radioButtonGroupProvideKey: InjectionKey<InjectionKeyType>;
