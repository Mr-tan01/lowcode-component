<template>
    <div class="lcc-header">
        <div class="lcc-header__wrapper">
            <div class="lcc-header__wrapper__navs">
                <div class="lcc-header__wrapper__navs__item" v-for="(item, index) in renderNavData" :key="index">
                    <n-popover trigger="hover" arrow-class="header-arrow-class" class="header-popover-class">
                        <template #trigger>
                            <a class="lcc-header__wrapper__navs__item__link" @click="jump(item)">
                                {{ item.title }}
                            </a>
                        </template>
                        <div class="lcc-header__wrapper__navs__drop" v-if="item.list">
                            <div class="lcc-header__wrapper__navs__drop__group" v-for="(el, key) in item.list" :key>
                                <div class="lcc-header__wrapper__navs__drop__group__label">
                                    {{ el.label }}
                                </div>
                                <div class="lcc-header__wrapper__navs__drop__group__item__group">
                                    <div class="lcc-header__wrapper__navs__drop__group__item__group__nav"
                                        v-for="(child, ckey) in el.children" :key="ckey">
                                        {{ child.title }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </n-popover>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { NPopover } from 'naive-ui/es/popover';

type NavData = {
    title: string;
    path: string;
    list?: {
        label: string;
        children: NavData[];
    }[];

};
const defNavData = [{
    title: '高质量发展中心',
    path: '/home',
},
{
    title: '学生发展中心',
    path: '/join',
},
{
    title: '教师发展中心',
    path: '/join',
    list: [
        {
            label: '数据概览',
            children: [
                {
                    title: '数据概览',
                    path: '',
                },
            ]
        },
        {
            label: '教师队伍建设',
            children: [
                {
                    title: '基础教育教师队伍结构',
                    path: '',
                },
                {
                    title: '基础教育校长队伍',
                    path: '',
                },
                {
                    title: '基础教育交流轮岗',
                    path: '',
                },
                {
                    title: '基础教育交流轮岗',
                    path: '',
                },
                {
                    title: '教师资源均衡发展分析',
                    path: '',
                },
            ]
        },
        {
            label: '教师职业发展',
            children: [
                {
                    title: '教师成长',
                    path: '',
                },
                {
                    title: '教师专业技术水平分析',
                    path: '',
                },
                {
                    title: '教师风采',
                    path: '',
                },
            ]
        },
    ]
},
{
    title: '治理决策中心',
    path: '/join',
},
{
    title: '发展规划中心',
    path: '/join',
}
];
const {
    navDatas,
} = defineProps({
    navDatas: {
        type: Array as PropType<NavData[]>,
    }
});

const renderNavData = computed(() => navDatas ?? defNavData);
const $emit = defineEmits<{
    (e: 'jump', item: NavData): void;
}>();
function jump(item: NavData) {
    $emit('jump', item);
}
</script>

<style lang="scss">
.header-popover-class {
    --n-padding: 0 !important;
    --n-color: transparent !important;
    .header-arrow-class {
        background-color: rgba(15, 49, 99, 1) !important;
        border: 1px solid rgba(46, 155, 182, 1) !important;
    }
}


</style>
<style lang="scss" scoped>
.lcc-header {
    width: 100%;
    height: 106px;
    background: url(./images/header-nav-bg.png) no-repeat;
    background-size: 100% 100%;

    &__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__navs {
            width: 50%;
            display: flex;
            gap: 10px;
            align-items: center;
            position: relative;
            z-index: 301;
            perspective: 3000px;
            transform-style: preserve-3d;


            &__item {
                color: #fff;
                font-size: 18px;
                line-height: 28px;
                flex: 3;
                text-align: center;
                display: flex;
                flex-direction: column;
                height: 100%;

                &__link {
                    display: block;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-sizing: border-box;
                    white-space: nowrap;

                    &:hover {
                        cursor: pointer;
                        opacity: 0.8;
                    }
                }

                &:nth-last-of-type(3) {
                    flex: 4;
                    font-size: 30px;

                    .lcc-header__wrapper__navs__item__link {
                        padding-bottom: 15px;
                    }
                }
            }

            &__drop {
                --offsetY: 10px;
                width: 100%;
                display: flex;
                gap: 40px;
                background: linear-gradient(174deg, #123479 0%, rgba(44, 106, 210, 0.24) 56%, #0692A1 100%);
                box-shadow: 0px 20px 20px -10px rgba(0, 0, 0, 0.31);
                border-radius: 8px;
                border: 1px solid;
                border-image: linear-gradient(356deg, rgba(110, 173, 255, 0.45), rgba(63, 255, 246, 1)) 1 1;
                padding: 15px 30px;
                box-sizing: border-box;
                border-radius: 8px;

                &::before {
                    content: '';
                    position: absolute;
                    top: calc(var(--offsetY) * -1);
                    left: 0;
                    width: 100%;
                    height: calc(100% + var(--offsetY));
                    z-index: -1;
                }

                &__group {
                    flex: 1;

                    &__label {
                        font-family: HarmonyOS_Sans_SC_Bold;
                        font-size: 16px;
                        color: #F2F3F4;
                        line-height: 24px;
                        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
                        text-align: left;
                        font-style: normal;
                        text-transform: none;
                        padding-bottom: 15px;
                        margin-bottom: 15px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                    }

                    &__item__group {
                        display: flex;
                        flex-direction: column;
                        gap: 15px;

                        &__nav {
                            font-family: HarmonyOS_Sans_SC_Medium;
                            font-size: 16px;
                            color: #F2F3F4;
                            line-height: 24px;
                            text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
                            text-align: left;
                            font-style: normal;
                            text-transform: none;
                            white-space: nowrap;

                            &:hover {
                                color: rgba(15, 251, 248, 1);
                            }

                        }
                    }
                }
            }
        }
    }
}
</style>