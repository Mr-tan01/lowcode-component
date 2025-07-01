import { PropType } from 'vue'
import { Cartesian3, Viewer } from 'cesium'
declare const _default: import('vue').DefineComponent<
    import('vue').ExtractPropTypes<{
        echartsOptions: {
            type: ObjectConstructor
            default: () => void
        }
        cesiumOptions: {
            type: PropType<Viewer.ConstructorOptions>
            default: () => void
        }
        spinStroke: {
            type: PropType<string>
            default: string
        }
        spinContainerBg: {
            type: PropType<string>
            default: string
        }
        spinDescriptionColor: {
            type: PropType<string>
            default: string
        }
        centerPosition: {
            type: PropType<Cartesian3>
            default: () => Cartesian3
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
        loading: {
            type: PropType<boolean>
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
        'update:loading': (value: boolean) => void
    },
    string,
    import('vue').PublicProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            echartsOptions: {
                type: ObjectConstructor
                default: () => void
            }
            cesiumOptions: {
                type: PropType<Viewer.ConstructorOptions>
                default: () => void
            }
            spinStroke: {
                type: PropType<string>
                default: string
            }
            spinContainerBg: {
                type: PropType<string>
                default: string
            }
            spinDescriptionColor: {
                type: PropType<string>
                default: string
            }
            centerPosition: {
                type: PropType<Cartesian3>
                default: () => Cartesian3
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
            loading: {
                type: PropType<boolean>
            }
        }>
    > &
        Readonly<{
            'onHandle-click'?: ((...args: any[]) => any) | undefined
            'onUpdate:loading'?: ((value: boolean) => any) | undefined
        }>,
    {
        baseUrl: string
        spinStroke: string
        spinContainerBg: string
        spinDescriptionColor: string
        centerPosition: Cartesian3
        echartsOptions: Record<string, any>
        cesiumOptions: Viewer.ConstructorOptions
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
    any
>
export default _default
