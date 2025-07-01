declare const _default: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        options: {
            type: ObjectConstructor
            default: () => void
        }
        rotateSpeed: {
            type: NumberConstructor
            default: number
        }
        defaultRotate: {
            type: BooleanConstructor
            default: boolean
        }
        baseUrl: {
            type: StringConstructor
            default: string
            require: boolean
        }
    }>,
    {},
    {},
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        'handle-click': (...args: any[]) => void
    },
    string,
    import('vue').PublicProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            options: {
                type: ObjectConstructor
                default: () => void
            }
            rotateSpeed: {
                type: NumberConstructor
                default: number
            }
            defaultRotate: {
                type: BooleanConstructor
                default: boolean
            }
            baseUrl: {
                type: StringConstructor
                default: string
                require: boolean
            }
        }>
    > &
        Readonly<{
            'onHandle-click'?: ((...args: any[]) => any) | undefined
        }>,
    {
        baseUrl: string
        options: Record<string, any>
        rotateSpeed: number
        defaultRotate: boolean
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
export default _default
