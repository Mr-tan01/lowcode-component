import { PropType } from 'vue'
declare const SIZE: {
    readonly small: 'small'
    readonly medium: 'medium'
    readonly large: 'large'
}
type Size = typeof SIZE
declare function __VLS_template(): {
    attrs: Partial<{}>
    slots: {
        value?(_: {}): any
        footer?(_: {}): any
    }
    refs: {}
    rootEl: HTMLDivElement
}
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>
declare const __VLS_component: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        value: {
            type: NumberConstructor
        }
        hint: {
            type: StringConstructor
        }
        size: {
            type: PropType<Size[keyof Size]>
        }
        fixed: {
            type: BooleanConstructor
        }
        decimal: {
            type: NumberConstructor
        }
        type: {
            type: PropType<'border' | 'noborder'>
        }
        tip: {
            type: StringConstructor
        }
        valueColor: {
            type: StringConstructor
        }
        hintColor: {
            type: StringConstructor
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
            value: {
                type: NumberConstructor
            }
            hint: {
                type: StringConstructor
            }
            size: {
                type: PropType<Size[keyof Size]>
            }
            fixed: {
                type: BooleanConstructor
            }
            decimal: {
                type: NumberConstructor
            }
            type: {
                type: PropType<'border' | 'noborder'>
            }
            tip: {
                type: StringConstructor
            }
            valueColor: {
                type: StringConstructor
            }
            hintColor: {
                type: StringConstructor
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
