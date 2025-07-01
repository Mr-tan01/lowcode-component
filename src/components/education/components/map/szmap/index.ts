import Szmap from './szmap.vue'
import SzRawMap from './rawMap.vue'

export type SzmapInstanceType = InstanceType<typeof Szmap>
export type SzRawMapInstanceType = InstanceType<typeof SzRawMap>
export * from './const'
export * from './props'

export { Szmap, SzRawMap }
