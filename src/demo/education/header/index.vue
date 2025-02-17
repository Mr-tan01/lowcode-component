<template>
     <LcHeader v-model:index="headerIndex" hideArrow></LcHeader>
     <LcHeader v-model:index="headerIndex"></LcHeader>
</template>
<script lang="ts" setup>
import { LcHeader } from "@/components/education/components/header";
import { ref } from "vue";
const headerIndex = ref(2);
</script>