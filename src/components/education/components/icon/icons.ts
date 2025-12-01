import { ref, type Ref, watch } from 'vue'

export const funcdomainIcons = import.meta.glob<string>('./images/func/**/*.png', {
    import: 'default',
    eager: false,
})

export const eventdomainIcons = import.meta.glob<string>('./images/event/**/*icon.png', {
    import: 'default',
    eager: false,
})

export const baseSupportdomainIcons = import.meta.glob<string>('./images/baseSupport/**/*icon.png', {
    import: 'default',
    eager: false,
})

export const menustdomainIcons = import.meta.glob<string>('./images/menus/**/*.png', {
    import: 'default',
    eager: false,
})

const imageIconPromise = {
    func: funcdomainIcons,
    event: eventdomainIcons,
    menus: menustdomainIcons,
    baseSupport: baseSupportdomainIcons,
}

export type backgroundImg = 'booth' | 'pedestal'

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
        expand: 'expand',
        retract: 'retract',
        parallel: 'parallel',
        student: 'student',
        teacher: 'teacher',
        international: 'international',
        doctor: 'doctor',
        acreage: 'acreage',
        flipbook: 'flipbook',
        expenditure: 'expenditure',
        pieChart: 'pie-chart',
        reat: 'reat',
        privateSchool: 'private-school',
        publicSchool: 'public-school',
        campusSchool: 'campus-school',
        highSchool: 'high-school',
        specialistSchool: 'specialist-school',
        professionalHighSchool: 'professional-high-school',
        instrument: 'instrument',
        safety: 'safety',
        occupation: 'occupation',
        construction: 'construction',
        person: 'person',
        creditRecognitionRate: 'credit-recognition-rate',
        primarySchool: 'primary-school',
        middleSchool: 'middle-school',
        university: 'university',
        studentPopulation: 'student-population',
        professionalTeachers: 'professional-teachers',
        area: 'area',
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
        dataOverview: 'dataOverview',
        base: 'base',
        team: 'team',
        five: 'five',
        evaluation: 'evaluation',
        planningBlueprint: 'planningBlueprint',
        schoolSafety: 'schoolSafety',
        schoolsGuarantee: 'schoolsGuarantee',
    },
    baseSupport: {
        booth: 'booth',
        pedestal: 'pedestal',
    },
    menus: {
        basicEducation: 'basic-education',
        bluePrint: 'blue-print',
        campusSecurity: 'campus-security',
        careerDevelopment: 'career-development',
        conditionsGuarantees: 'conditions-guarantees',
        dataOverview: 'data-overview',
        degreeResources: 'degree-resources',
        developSimultaneously: 'develop-simultaneously',
        digitization: 'digitization',
        educationalFund: 'educational-fund',
        exchangeCooperation: 'exchange-cooperation',
        highereducation: 'higher-education',
        supervisoryEvaluation: 'supervisory-evaluation',
        teamConstruction: 'team-construction',
    },
} as const

type innerImageDomain = typeof innerImageDomain
type ReadValue<T> = T[keyof T]
export type Domains = keyof innerImageDomain
export type NameTypeFunc<D extends Domains> = ReadValue<innerImageDomain[D]>
export type NameTypes = NameTypeFunc<'event'> | NameTypeFunc<'func'> | NameTypeFunc<'menus'> | NameTypeFunc<'baseSupport'>
export function useImage<D extends Domains>(domain: Ref<D>, name: Ref<NameTypeFunc<D>>, ext: Ref<string>, baseSrcName?: Ref<string | undefined>) {
    const src = ref<string>('')
    const selectedSrc = ref<string>('')
    const baseSrc = ref<string>('')
    const baseSelectedSrc = ref<string>('')
    const updatePaths = (name: NameTypeFunc<D>) => {
        let iconPath = `${domain.value}/${name}${ext.value}`
        let baseIconPath = ''
        let baseSelectedPath = ''
        if (baseSrcName?.value) {
            baseIconPath = `${domain.value}/${baseSrcName.value}/icon${ext.value}`
            baseSelectedPath = `${domain.value}/${baseSrcName.value}/selected-icon${ext.value}`
            imageIconPromise[domain.value]?.[`./images/${baseIconPath}`]?.()?.then(val => (baseSrc.value = val))
            imageIconPromise[domain.value]?.[`./images/${baseSelectedPath}`]?.()?.then(val => (baseSelectedSrc.value = val))
            console.log(baseSrcName.value, baseSrc.value, 'baseSrc')
        }
        let selectedPath = ''
        if (domain.value === 'event' || domain.value === 'baseSupport') {
            iconPath = `${domain.value}/${name}/icon${ext.value}`
            selectedPath = `${domain.value}/${name}/selected-icon${ext.value}`
        } else if (domain.value === 'menus') {
            iconPath = `${domain.value}/${name}${ext.value}`
        }
        imageIconPromise[domain.value]?.[`./images/${iconPath}`]?.()?.then(val => (src.value = val))

        if (selectedPath) {
            imageIconPromise[domain.value]?.[`./images/${selectedPath}`]?.()?.then(val => (selectedSrc.value = val))
        }
    }

    // 初始化路径
    updatePaths(name.value)

    // 监听 name 的变化
    watch(name, newName => {
        updatePaths(newName)
    })

    return {
        src,
        selectedSrc,
        baseSrc,
        baseSelectedSrc,
    }
}
