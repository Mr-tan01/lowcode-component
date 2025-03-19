
import fs from 'node:fs';
import commonViteConfig from './config.js';
import merge from 'lodash-es/merge.js';
import { EsmComBuilder, tasking } from '@mmj-code-lib/scripts';
import { program } from 'commander';
import pck from './package.json' assert { type: 'json' };

const programActions = {

}
program.version(pck.version)
    .option('-w, --watch', 'watch mode', false)
    .option('-t, --target <target>', 'build target', '')
    .action((action) => {
        Object.assign(programActions, action);
    })
    .parse(process.argv);
const modeListBase = '../src/components/education/components';
// https://vite.dev/config/
const options = merge({}, commonViteConfig, {
    build: {
        watch: programActions.watch,
        outDir: '../es/education',
        emptyOutDir: false,
    }
});
const esmComBuilder = new EsmComBuilder(modeListBase, options);
const modeList = programActions.target ? programActions.target?.split(' ') : fs.readdirSync(modeListBase);
console.log("编译模块：", modeList);
async function startBuild() {
    console.time("built");
    await tasking(modeList, (taskId) => {
        return new Promise((resolve) => {
            taskId !== 'index.ts' ? esmComBuilder.executeBuild(taskId).then(resolve) : resolve();
        });
    }, 1);
    console.timeEnd("built");
}
startBuild();