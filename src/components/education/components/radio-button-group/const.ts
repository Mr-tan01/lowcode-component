import { ComputedRef, InjectionKey } from 'vue'

export type InjectionKeyType = ComputedRef<{
    value: string | number
    change(value: string | number): void
}>
// 创建全局唯一的 Symbol
export const radioButtonGroupProvideKey: InjectionKey<InjectionKeyType> = Symbol.for('radioButtonGroupInject') as InjectionKey<InjectionKeyType>
