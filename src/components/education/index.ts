import { type App } from 'vue'

export * from './components'

import { LcBgCommon, LcButton, LcCarouseBox, LcBarChart, LcLineChart, LcPieChart } from './components'

export function install(app: App) {
    app.component('LcBgCommon', LcBgCommon)
    app.component('LcButton', LcButton)
    app.component('LcCarouseBox', LcCarouseBox)
    app.component('LcBarChart', LcBarChart)
    app.component('LcLineChart', LcLineChart)
    app.component('LcPieChart', LcPieChart)
}
