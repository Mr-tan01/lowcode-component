<template>
  <div class="lc-arrow-indicators">
      <div class="lc-arrow-indicators__icon">
          <LcIcon domain="event" :name="icon" :size="70"></LcIcon>
      </div>
      <div class="lc-arrow-indicators__center">
          <div class="lc-arrow-indicators__center__lable">
              {{ label }}
          </div>
          <div class="lc-arrow-indicators__center__value">
              <slot name="value">
                  <NNumberAnimation show-separator :from="0" :to="renderValue" active :precision="decimal" />
                  <span class="lc-arrow-indicators__center__value__unit"> {{ renderUnit }} </span>
              </slot>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { LcIcon } from "@/components/education/components/icon";
import { type NameTypes } from "../icon/icons";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import { computed, PropType } from "vue";
import { bigNumber } from "lowcode-share/es/share";

const {
  label = "",
  value = 0,
  fixed = true,
  decimal = 0,
  icon = "person2",
  unit = "",
} = defineProps({
  label: {
      type: String,
  },
  value: {
      type: Number,
  },
  fixed: {
      type: Boolean,
  },
  decimal: {
      type: Number,
  },
  icon: {
      type: String as PropType<NameTypes>,
  },
  unit: {
      type: String,
  },
});

const renderValue = computed(() => {
  if (fixed) {
      const { result } = bigNumber(value, decimal);
      return result;
  }
  return value;
});

const renderUnit = computed(() => {
  if (fixed) {
      const { unit: numUnit } = bigNumber(value, decimal);
      return `${numUnit}${unit}`;
  }
  return unit;
});
</script>

<style lang="scss" scoped>
.lc-arrow-indicators {
  width: 390px;
  min-height: 120px;
  display: flex;
  align-items: center;
  padding: 0 56px 0 8px;
  box-sizing: border-box;
  gap: 5px;
  background-image: url("./images/skew/arrow-bg.png");

  &__center {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &__lable {
          font-family: HarmonyOS_Sans_SC;
          font-size: 16px;
          color: #ffffff;
          line-height: 20px;
          text-align: left;
          font-style: normal;
          text-transform: none;
      }

      &__value {
          font-family: HarmonyOS_Sans_SC_Medium;
          font-size: 30px;
          color: #0fd4fb;
          line-height: 37px;
          text-shadow: 0px 0px 20px rgba(0, 129, 255, 0.4);
          text-align: center;
          font-style: normal;
          text-transform: none;

          &__unit {
              margin-left: 8px;
              font-size: 14px;
          }
      }
  }
}
</style>