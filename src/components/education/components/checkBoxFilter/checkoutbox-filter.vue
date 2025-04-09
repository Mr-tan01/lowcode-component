<template>
    <div class="lc-checkbox-filter">
        <div class="lc-checkbox-filter__check__all lc-checkbox-gaid">
            <LcCheckbox class="lc-checkbox-gaid__row" v-model:checked="checkAll" @update:checked="handleCheckAll">
                <span class="lc-checkbox-filter__check__label" :class="{ 'lc-checkbox-filter__check__label--selected': checkAll }">全选</span>
            </LcCheckbox>
            <span class="check-reset lc-checkbox-gaid__row" @click="handleReset">
                <div class="check-reset__icon">
                    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g transform="translate(-344, -220)">
                                <g id="编组-2" transform="translate(344, 218)">
                                    <g id="refresh" transform="translate(0, 2)">
                                        <path d="M0,0 L15.9565679,0 L15.9565679,16 L0,16 Z" id="refresh-(Background)"></path>
                                        <path
                                            d="M13.2174605,7.99868345 L14.1761871,7.99868345 C14.176188,4.54763269 11.4013631,1.75 7.97844137,1.75 C5.7481695,1.75 3.79304044,2.93771338 2.70135186,4.72001243 L2.70135174,2.64251906 L1.74524962,2.64251906 L1.74524955,5.74893761 C1.74524955,6.02507998 1.96910717,6.24893761 2.24524955,6.24893761 C2.24524957,6.24893761 2.24524959,6.24893761 2.24524962,6.24893761 L5.32227219,6.24893713 L5.32227219,6.24893713 L5.32227219,5.28497791 L3.48097946,5.28497815 C4.39709313,3.74210536 6.07039562,2.71133503 7.97844137,2.7113356 C10.8669382,2.7113364 13.2174614,5.07360196 13.2174605,7.99868345 Z M2.73941745,7.998631 C2.73941665,10.9237127 5.08993982,13.286026 7.97843804,13.286027 C9.88648247,13.286027 11.5597845,12.2552587 12.4758982,10.7123852 L10.634296,10.7123852 L10.634296,9.74842548 L13.7113183,9.74842548 C13.9874607,9.74842548 14.2113183,9.97228311 14.2113183,10.2484255 L14.2113183,13.3548441 L14.2113183,13.3548441 L13.2552167,13.3548441 L13.2552167,11.2778559 C12.1634682,13.0598733 10.2084988,14.2473631 7.97843756,14.2473631 C4.55551581,14.2473631 1.78068946,11.449683 1.78069137,7.998631 L2.73941745,7.998631 Z"
                                            fill="#0FFBF8"
                                        ></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <span>重置</span>
            </span>
        </div>

        <LcCheckboxGroup v-model:value="checkboxAllValue">
            <template v-for="(item, index) in dataList" :key="index">
                <LcSubhead class="lc-checkbox-filter__check__title" :hideLeftImg="false" :text="item.label" />
                <div class="lc-checkbox-gaid">
                    <LcCheckbox class="lc-checkbox-gaid__row" :value="check.value" v-for="check in item.children" :key="check.value">
                        <span class="lc-checkbox-filter__check__label" :class="{ 'lc-checkbox-filter__check__label--selected': checkboxAllValue.includes(check.value) }">{{
                            check.label
                        }}</span>
                    </LcCheckbox>
                </div>
            </template>
        </LcCheckboxGroup>
    </div>
</template>
<script lang="ts" setup>
import { ref, computed, PropType, watch } from "vue";
import { LcCheckbox, LcCheckboxGroup } from "@/components/education/components/checkbox/index";
import { LcSubhead } from "@/components/education/components/headline";
export type FilterItem = {
    label: string;
    value: number | string;
};
export type FilterList = {
    label: string;
    children?: FilterItem[];
};

const {
    row = 2,
    dataList = [],
    isCheckAll = false,
} = defineProps({
    row: {
        type: Number,
    },
    dataList: {
        type: Array as PropType<FilterList[]>,
    },
    isCheckAll: {
        type: Boolean,
    },
});

const $emit = defineEmits<{
    (e: "check", value: (string | number)[]): void;
}>();
const checkAll = ref(false);
const checkboxAllValue = defineModel<(number | string)[]>("value", { default: [] });
// 获取数据后先直接储存所有的value 方便后面全选直接使用
const checkAllVlaue = computed(() => {
    return dataList.reduce((acc, item) => {
        if (item.children) {
            acc.push(...item.children.map((child) => child.value));
        }
        return acc;
    }, [] as (number | string)[]);
});

const handleCheckAll = (checked: boolean) => {
    if (!checked) {
        handleReset();
        return;
    }
    checkboxAllValue.value = checkAllVlaue.value;
};

const handleReset = () => {
    checkboxAllValue.value = [];
    checkAll.value = false;
};

const updateCheckAllStatus = () => {
    const allValues = checkAllVlaue.value;
    const selectedValues = checkboxAllValue.value;
    checkAll.value = allValues.every((value) => selectedValues.includes(value));
};

if (isCheckAll) {
    checkAll.value = true;
    handleCheckAll(checkAll.value);
}

watch(checkboxAllValue, (value) => {
    updateCheckAllStatus();
    $emit("check", value);
});
</script>
<style lang="scss" scoped>
.lc-checkbox-filter {
    &__check {
        &__all {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            .check-reset {
                cursor: pointer;
                display: flex;
                align-items: center;
                color: #0ffbf8;
                gap: 4px;
                &__icon {
                    width: 16px;
                    height: 16px;
                    svg {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        &__title {
            margin-bottom: 14px;
        }
        &__label {
            font-family: HarmonyOS_Sans_SC;
            font-size: 16px;
            color: #9dcbed;
            line-height: 26px;
            &--selected {
                color: #0ffbf8;
            }
        }
    }

    .lc-checkbox-gaid {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        &__row {
            margin-bottom: 14px;
            flex: 0 0 calc(100% / v-bind(row));
        }
    }
}
</style>
