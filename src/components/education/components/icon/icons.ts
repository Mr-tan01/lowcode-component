import { ref, type Ref, watch } from "vue";

export const funcdomainIcons = import.meta.glob<string>(
    "./images/func/**/*.png",
    {
        import: "default",
        eager: false,
    }
);

export const eventdomainIcons = import.meta.glob<string>(
    "./images/event/**/*icon.png",
    {
        import: "default",
        eager: false,
    }
);

const imageIconPromise = {
    func: funcdomainIcons,
    event: eventdomainIcons,
};

export const innerImageDomain = {
    func: {
        add: "add",
        caretDown: "caret-down",
        caretSort: "caret-sort",
        caretUp: "caret-up",
        chevronDown: "chevron-down",
        chevronUp: "chevron-up",
        helpCircle: "help-circle",
        infoCircle: "info-circle",
        internet: "internet",
        laptop: "laptop",
        layers: "layers",
        location: "location",
        refresh: "refresh",
        remove: "remove",
        search: "search",
        time: "time",
        blueLArrow: "blue-l-arrow",
        blueRArrow: "blue-r-arrow",
        pause: "pause",
        expand: "expand",
        retract: "retract",
        parallel: "parallel",
    },
    event: {
        domain: "domain",
        style: "style",
        person: "person",
        gate: "gate",
        building: "building",
        mentor: "mentor",
        person2: "person2",
        reward: "reward",
    },
} as const;

type innerImageDomain = typeof innerImageDomain;
type ReadValue<T> = T[keyof T];
export type Domains = keyof innerImageDomain;
export type NameTypeFunc<D extends Domains> = ReadValue<innerImageDomain[D]>;
export type NameTypes = NameTypeFunc<"event"> | NameTypeFunc<"func">;
export function useImage<D extends Domains>(
    domain: Ref<D>,
    name: Ref<NameTypeFunc<D>>,
    ext: Ref<string>
) {
    const src = ref<string>("");
    const selectedSrc = ref<string>("");
    const updatePaths = (name: NameTypeFunc<D>) => {
        let iconPath = `${domain.value}/${name}${ext.value}`;
        let selectedPath = "";
        if (domain.value === "event") {
            iconPath = `${domain.value}/${name}/icon${ext.value}`;
            selectedPath = `${domain.value}/${name}/selected-icon${ext.value}`;
        }
        imageIconPromise[domain.value]
            ?.[`./images/${iconPath}`]?.()
            ?.then((val) => (src.value = val));
        if (selectedPath) {
            imageIconPromise[domain.value]
                ?.[`./images/${selectedPath}`]?.()
                ?.then((val) => (selectedSrc.value = val));
        }
    };

    // 初始化路径
    updatePaths(name.value);

    // 监听 name 的变化
    watch(name, (newName) => {
        updatePaths(newName);
    });
    return {
        src,
        selectedSrc,
    };
}
