import { default as LcRobot } from './robot';
import { default as LcMainRobot } from './main-robot';
export * from './const';
export type LcRobotInstanceType = InstanceType<typeof LcRobot>;
export type LcMainRobotInstanceType = InstanceType<typeof LcMainRobot>;
export { LcRobot, LcMainRobot, };
