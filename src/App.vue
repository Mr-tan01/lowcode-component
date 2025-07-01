<template>
    <DemoConfigProvider>
        <DemoLayout :menu="deomMenu">
            <template #layoutContent>
                <LcBgCommon>
                    <RouterView></RouterView>
                </LcBgCommon>
            </template>
        </DemoLayout>
    </DemoConfigProvider>
</template>

<script setup lang="ts">
import { DemoLayout, DemoConfigProvider } from 'lowcode-share/es/demo'
import { LcBgCommon } from '@/components/education/components/bgCommon'
import { deomMenu } from '@/router'
</script>
