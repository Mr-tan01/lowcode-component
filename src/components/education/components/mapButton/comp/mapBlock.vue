<template>
    <div class="map-block">
        <div
            v-for="(item, index) in mapBlockName"
            :key="item"
            class="map-block__item"
            :class="index === 0 ? 'city-menu-item' : 'district-menu-item'"
            @click="handleClick(item)"
        >
            <section class="section"><img :src="MapImagesMap[item]" alt="" /></section>
            <div>{{ item }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { MapType, MapImagesMap } from './const'

const mapBlockName = Object.values(MapType) as MapType[]

const emit = defineEmits(['itemClick'])

const handleClick = (item: MapType) => {
    emit('itemClick', item)
}
</script>

<style scoped lang="scss">
.map-block {
    max-height: 435px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 3px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        background: #0fd4fb;
        border-radius: 3px;
        &:hover {
            background: rgba(15, 251, 248, 1);
        }
    }
    &__item {
        .section {
            & > img {
                margin-top: 10px;
            }
        }

        & > div {
            font-size: 14px;
            color: #fff;
        }
    }
}
.city-menu-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(8, 68, 113, 1);
    backdrop-filter: blur(3px);
    border-radius: 4px;
    padding: 5px 25px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.district-menu-item {
    min-height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border-radius: 3px;
    background: rgba(8, 68, 113, 1);
    backdrop-filter: blur(3px);
    border-radius: 4px;
    transition: all 0.3s ease;
    cursor: pointer;
    & > section {
        width: 60px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    & > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 50px;
        border-left: 1px solid rgba(255, 255, 255, 0.08);
    }
}
.city-menu-item:hover,
.district-menu-item:hover {
    background: linear-gradient(180deg, rgba(15, 251, 248, 0) 0%, #0ffbf8 100%);
}
</style>
