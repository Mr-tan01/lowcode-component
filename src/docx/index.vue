<template>
    <div class="docx">

        <n-space vertical>
            <n-layout has-sider position="absolute">
                <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" show-trigger
                    :inverted="true">
                    <n-menu :inverted="true" :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions" />
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
import { LcBgCommon } from '../../es/education/bgCommon';
import { RouterLink, useRouter } from 'vue-router';
import { NSpace, NLayout, NLayoutSider, NMenu } from 'naive-ui';
import type { MenuOption } from 'naive-ui'

import { h } from 'vue'
const $router = useRouter();

const routes = $router.getRoutes();
const menuOptions: MenuOption[] = routes.map(item => {
    return {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: item.name,
                }
            },
            { default: () => item.name }
        ),
        key: item.path
    }
});
function clickButton(path: string) {
    const _resove = $router.resolve(path);
    window.open(_resove.href);
}
</script>
<style lang="scss" scoped>
.docx {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>