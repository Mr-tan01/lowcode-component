
import fs from 'node:fs';
import commonViteConfig from './config.js';
import merge from 'lodash-es/merge.js';
import { EsmComBuilder } from '@mmj-code-lib/scripts';
import { resolve } from 'node:path';

const modeListBase = '../src/components/education/components';
// https://vite.dev/config/
const options = merge({}, commonViteConfig, {
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('../src')
            },
            {
                find: '~',
                replacement: resolve('../')
            },

        ],
    },
    build: {
        outDir: '../es/education',
    }
});
const esmComBuilder = new EsmComBuilder(modeListBase, options);
const modeList = fs.readdirSync(modeListBase);

modeList.forEach(mode => {
    mode !== 'index.ts' ? esmComBuilder.executeBuild(mode) : null;
});
