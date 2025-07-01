import { PropType } from 'vue'
import { StarType, StarItemType } from './const'
declare const _default: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        placeholder: StringConstructor
        stars: PropType<StarType[]>
        duration: NumberConstructor
        animate: BooleanConstructor
        startAngle: NumberConstructor
        maxShowCount: NumberConstructor
        fullAngle: NumberConstructor
        forbidden: BooleanConstructor
        value: {
            type: PropType<string>
        }
    }>,
    {},
    {},
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        'update:value': (value: string) => any
    } & {
        click: (item: StarType, index: number) => any
        itemClick: (item: StarItemType, index: number) => any
    },
    string,
    import('vue').PublicProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            placeholder: StringConstructor
            stars: PropType<StarType[]>
            duration: NumberConstructor
            animate: BooleanConstructor
            startAngle: NumberConstructor
            maxShowCount: NumberConstructor
            fullAngle: NumberConstructor
            forbidden: BooleanConstructor
            value: {
                type: PropType<string>
            }
        }>
    > &
        Readonly<{
            'onClick'?: ((item: StarType, index: number) => any) | undefined
            'onItemClick'?:
                | ((item: StarItemType, index: number) => any)
                | undefined
            'onUpdate:value'?: ((value: string) => any) | undefined
        }>,
    {
        animate: boolean
        forbidden: boolean
    },
    {},
    {},
    {},
    string,
    import('vue').ComponentProvideOptions,
    true,
    {
        starWrapperRef: HTMLDivElement
        starElRefs: HTMLDivElement[]
    },
    HTMLDivElement
>
export default _default
