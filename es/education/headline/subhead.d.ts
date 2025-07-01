import { PropType } from 'vue'
declare const direction: {
    readonly right: 'right'
    readonly center: 'center'
    readonly left: 'left'
}
type DirectionType = typeof direction
declare function __VLS_template(): {
    attrs: Partial<{}>
    slots: {
        'icon-left'?(_: {}): any
        'icon-right'?(_: {}): any
    }
    refs: {}
    rootEl: HTMLDivElement
}
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>
declare const __VLS_component: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        text: {
            type: StringConstructor
        }
        maxLength: {
            type: NumberConstructor
        }
        fontSize: {
            type: StringConstructor
        }
        type: {
            type: PropType<DirectionType[keyof DirectionType]>
        }
        hideRadioIcon: {
            type: BooleanConstructor
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
            text: {
                type: StringConstructor
            }
            maxLength: {
                type: NumberConstructor
            }
            fontSize: {
                type: StringConstructor
            }
            type: {
                type: PropType<DirectionType[keyof DirectionType]>
            }
            hideRadioIcon: {
                type: BooleanConstructor
            }
        }>
    > &
        Readonly<{}>,
    {
        hideRadioIcon: boolean
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
