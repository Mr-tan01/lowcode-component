import LcCesium from './cesium.vue'
import LcCesiumModelDialog from './modelDialog.vue'
export type CesiumInstanceType = InstanceType<typeof LcCesium>
export type CesiumModelDialogInstanceType = InstanceType<typeof LcCesiumModelDialog>

export default LcCesium
export { LcCesium, LcCesiumModelDialog }
