<template>
    <div class="docx">

        <n-space vertical>
            <n-layout has-sider position="absolute">
                <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" show-trigger
                    :inverted="true">
                    <n-scrollbar>
                        <n-menu :inverted="true" defaultExpandAll :collapsed-width="64" :collapsed-icon-size="22"
                            :options="menuOptions" />
                    </n-scrollbar>
                </n-layout-sider>
                <n-layout>
                    <LcBgCommon>
                        <RouterView></RouterView>
                    </LcBgCommon>
                </n-layout>
            </n-layout>
        </n-space>
    </div>
</template>

<script lang="ts" setup>
import { LcBgCommon } from '@/components/education/components/bgCommon';
import { RouterLink } from 'vue-router';
import { NSpace, NLayout, NLayoutSider, NMenu, NScrollbar } from 'naive-ui';
import type { MenuOption } from 'naive-ui'
import { deomMenu, type MenuRecordRawType } from '@/router';

import { h } from 'vue';

function toMenuOption(data?: MenuRecordRawType[]) {
    if (!data?.length) return data;
    return data.map(item => {
        return {
            label: () => h(
                RouterLink,
                {
                    to: {
                        path: item.path,
                    }
                },
                { default: () => item?.meta?.title }
            ),
            key: item.name,
            children: toMenuOption(item?.children),
        }
    });
}

const menuOptions: MenuOption[] = toMenuOption(deomMenu);
</script>
<style lang="scss" scoped>
.docx {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>