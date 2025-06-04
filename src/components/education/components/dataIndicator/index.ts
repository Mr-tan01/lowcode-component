import LcRangeIndicator from "./rangeIndicator.vue";
import LcSkewIndicator from "./skewIndicator.vue";
import LcIndicatorCard from "./indicatorCard.vue";
import LcIndicatorList from "./indicatorList.vue";
import lcBimodalIndex from "./bimodalIndex.vue";
import lcArrowIndicators from "./arrowIndicators.vue";
import LcPlanningIndicators, {
    Data as LcPlanningIndicatorsDataType,
    Item as LcPlanningIndicatorsItemType,
} from "./planningIndicatorsCard.vue";
import LcLargesKewIndicator from "./LargesKewIndicator.vue";
import LcIndicatorCardArrows from "./indicatorCardArrows.vue";
import LcMinitypeCard from "./minitypeCard.vue";
import LcHumanShapeCard from './humanShapeCard.vue'

export type LcRangeIndicatorInstanceType = InstanceType<
    typeof LcRangeIndicator
>;
export type LcSkewIndicatorInstanceType = InstanceType<typeof LcSkewIndicator>;
export type LcIndicatorCardInstanceType = InstanceType<typeof LcIndicatorCard>;
export type LcIndicatorListInstanceType = InstanceType<typeof LcIndicatorList>;
export type LcPlanningIndicatorsInstanceType = InstanceType<
    typeof LcPlanningIndicators
>;
export type lCBimodalIndexInstanceType = InstanceType<typeof lcBimodalIndex>;
export type lcArrowIndicatorsInstanceType = InstanceType<
    typeof lcArrowIndicators
>;
export type LcLargesKewIndicatorType = InstanceType<
    typeof LcLargesKewIndicator
>;
export type LcIndicatorCardViceType = InstanceType<
    typeof LcIndicatorCardArrows
>;
export type LcMinitypeCardType = InstanceType<typeof LcMinitypeCard>;
export type LcHumanShapeCardType = InstanceType<typeof LcHumanShapeCard>;

export {
    LcPlanningIndicators,
    LcRangeIndicator,
    LcSkewIndicator,
    LcIndicatorCard,
    LcIndicatorList,
    lcBimodalIndex,
    lcArrowIndicators,
    LcLargesKewIndicator,
    LcIndicatorCardArrows,
    LcMinitypeCard,
    LcHumanShapeCard,
    type LcPlanningIndicatorsDataType,
    type LcPlanningIndicatorsItemType,
};
