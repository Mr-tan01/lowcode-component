import { PropType } from 'vue'
type Data = {
    value?: number
    unit?: string
    customSlot?: string
    customValue?: string | number
}
declare function __VLS_template(): {
    attrs: Partial<{}>
    slots: Partial<Record<string, (_: { item: Data }) => any>>
    refs: {}
    rootEl: HTMLDivElement
}
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>
declare const __VLS_component: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        label: {
            type: StringConstructor
        }
        data: {
            type: PropType<Data[]>
        }
        unit: {
            type: StringConstructor
        }
        fixed: {
            type: BooleanConstructor
        }
        decimal: {
            type: NumberConstructor
        }
    }>,
    {},
    {},
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').PublicProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            label: {
                type: StringConstructor
            }
            data: {
                type: PropType<Data[]>
            }
            unit: {
                type: StringConstructor
            }
            fixed: {
                type: BooleanConstructor
            }
            decimal: {
                type: NumberConstructor
            }
        }>
    > &
        Readonly<{}>,
    {
        fixed: boolean
    },
    {},
    {},
    {},
    string,
    import('vue').ComponentProvideOptions,
    true,
    {},
    HTMLDivElement
>
declare const _default: __VLS_WithTemplateSlots<
    typeof __VLS_component,
    __VLS_TemplateResult['slots']
>
export default _default
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S
    }
}
