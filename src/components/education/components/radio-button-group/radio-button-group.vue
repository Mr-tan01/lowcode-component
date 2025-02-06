<template>
    <div class="lc-radio-button-group">
        <div class="lc-radio-button-group__wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue';
import { InjectionKeyType, radioButtonGroupProvideKey } from './const';

const vmodelValue = defineModel<string | number>({ default: '' });
const buttonGroupProvide: InjectionKeyType = computed(() => {
    return {
        value: vmodelValue.value,
        change(_value) {
            vmodelValue.value = _value;
        }
    }
});
provide(radioButtonGroupProvideKey, buttonGroupProvide);
</script>

<style lang="scss" scoped>
.lc-radio-button-group {
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        border: 1px solid #159AFF;
    }
}
</style>