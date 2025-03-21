import { ref } from "vue";

export const funcDomainIcons = import.meta.glob<string>('./images/func/**/*.png', {
    import: 'default',
    eager: false,
});

export const eventDomainIcons = import.meta.glob<string>('./images/event/**/*icon.png', {
    import: 'default',
    eager: false,
});

const imageIconPromise = {
    func: funcDomainIcons,
    event: eventDomainIcons,
}

export const innerImageDomain = {
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
        blueLArrow: 'blue-l-arrow',
        blueRArrow: 'blue-r-arrow',
        pause: 'pause',
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
} as const;

type InnerImageDomain = typeof innerImageDomain;
type ReadValue<T> = T[keyof T];
export type Domains = keyof InnerImageDomain;
export type NameTypeFunc<D extends Domains> = ReadValue<InnerImageDomain[D]>;
export type NameTypes = NameTypeFunc<'event'> | NameTypeFunc<'func'>
export function useImage<D extends Domains>(domain: D, name: NameTypeFunc<D>, ext = '.png') {
    const src = ref<string>('');
    const selectedSrc = ref<string>('');
    let iconPath = `${domain}/${name}${ext}`;
    let selectedPath = '';
    if(domain === 'event') {
        iconPath = `${domain}/${name}/icon${ext}`;
        selectedPath = `${domain}/${name}/selected-icon${ext}`;
    }
    imageIconPromise[domain]?.[`./images/${iconPath}`]?.()?.then((val) => src.value = val);
    if(selectedPath) {
        imageIconPromise[domain]?.[`./images/${selectedPath}`]?.()?.then((val) => selectedSrc.value = val); 
    }
    return {
        src,
        selectedSrc,
    };
}