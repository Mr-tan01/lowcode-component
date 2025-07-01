declare const _default: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        label: {
            type: StringConstructor
            default: string
        }
        data: {
            type: () => number[]
            required: true
            validator: (value: number[]) => boolean
        }
    }>,
    {},
    {},
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        'update-stops': (...args: any[]) => void
    },
    string,
    import('vue').PublicProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            label: {
                type: StringConstructor
                default: string
            }
            data: {
                type: () => number[]
                required: true
                validator: (value: number[]) => boolean
            }
        }>
    > &
        Readonly<{
            'onUpdate-stops'?: ((...args: any[]) => any) | undefined
        }>,
    {
        label: string
    },
    {},
    {},
    {},
    string,
    import('vue').ComponentProvideOptions,
    true,
    {
        progressBar: HTMLDivElement
    },
    HTMLDivElement
>
export default _default
