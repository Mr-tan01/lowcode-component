export const code1 = `
<template>
    <n-space>
        <LcIcon v-for="(item, key) in innerImageDomain.func" :key :name="item">{{ item }}</LcIcon>
    </n-space>
    <n-space>
        <LcIcon v-for="(item, key) in innerImageDomain.event" :key domain="event" :name="item" :size="70">{{ item }}</LcIcon>
    </n-space>
</template>
<script setup>
const innerImageDomain = {
    func: {
        add: 'add',
        caretDown: 'caret-down',
        caretSort: 'caret-sort',
        caretUp: 'caret-up',
        chevronDown: 'chevron-down',
        chevronUp: 'chevron-up',
        helpCircle: 'help-circle',
        infoCircle: 'info-circle',
        internet: 'internet',
        laptop: 'laptop',
        layers: 'layers',
        location: 'location',
        refresh: 'refresh',
        remove: 'remove',
        search: 'search',
        time: 'time',
        parallel: 'parallel',
    },
    event: {
        domain: 'domain',
        style: 'style',
        person: 'person',
        gate: 'gate',
        building: 'building',
        mentor: 'mentor',
        person2: 'person2',
        reward: 'reward',
    }
}
</script>
`
