<template>
 <NConfigProvider :date-locale="dateZhCN" :locale="zhCN" :theme="darkTheme">
    <slot></slot>
 </NConfigProvider>
</template>
<script lang="ts" setup>
import { NConfigProvider } from 'naive-ui/es/config-provider';
import { darkTheme } from 'naive-ui/es/themes'
import { dateZhCN, zhCN } from 'naive-ui/es/locales';
</script>