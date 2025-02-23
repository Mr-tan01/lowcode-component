
import fs from 'node:fs';
import commonViteConfig from './config.js';
import merge from 'lodash-es/merge.js';
import { EsmComBuilder, tasking } from '@mmj-code-lib/scripts';

const modeListBase = '../src/components/education/components';
// https://vite.dev/config/
const options = merge({}, commonViteConfig, {
    build: {
        outDir: '../es/education',
        emptyOutDir: false,
    }
});
const esmComBuilder = new EsmComBuilder(modeListBase, options);
const modeList = fs.readdirSync(modeListBase);
console.log("编译模块：", modeList);
tasking(modeList, (taskId) => {
    return new Promise((resolve) => {
        taskId !== 'index.ts' ? esmComBuilder.executeBuild(taskId).then(resolve) : resolve();
    });
}, 1);
