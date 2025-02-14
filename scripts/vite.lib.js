
import { EsmComBuilder } from 'mmj-code-lib/scripts/build.vite.mjs';
import fs from 'node:fs';
import commonViteConfig from './config.js';
import merge from 'lodash-es/merge.js';

const modeListBase = '../src/components/education/components';
// https://vite.dev/config/
const esmComBuilder = new EsmComBuilder(modeListBase, merge({}, commonViteConfig, {
    build: {
        outDir: '../es/education',
    }
}));

const modeList = fs.readdirSync(modeListBase);
modeList.forEach(mode => {
    mode !== 'index.ts' ? esmComBuilder.executeBuild(mode) : null;
});
// main
const esmComBuilder2 = new EsmComBuilder('../src/components', merge({}, commonViteConfig, {
    build: {
        outDir: '../dist',
    }
}));
esmComBuilder2.executeBuild('education');
