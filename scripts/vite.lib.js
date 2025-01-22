
import { EsmComBuilder } from './build.cli.js';
import fs from 'node:fs';

const modeListBase = '../src/components/education/components';
// https://vite.dev/config/
const esmComBuilder = new EsmComBuilder(modeListBase);

const modeList = fs.readdirSync(modeListBase);
modeList.forEach(mode => {
    mode !== 'index.ts' ? esmComBuilder.executeBuild(mode) : null;
});
// main
const esmComBuilder2 = new EsmComBuilder('../src/components', {
    build: {
        outDir: '../dist',
    }
});
esmComBuilder2.executeBuild('education');
