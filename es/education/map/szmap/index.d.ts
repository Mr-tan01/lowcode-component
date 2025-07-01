import { default as Szmap } from './szmap'
import { default as SzRawMap } from './rawMap'
export type SzmapInstanceType = InstanceType<typeof Szmap>
export type SzRawMapInstanceType = InstanceType<typeof SzRawMap>
export * from './const'
export * from './props'
export { Szmap, SzRawMap }
