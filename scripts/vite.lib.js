
import fs from 'node:fs';
import commonViteConfig from './config.js';
import merge from 'lodash-es/merge.js';
import { EsmComBuilder } from '@mmj-code-lib/scripts';
import { join } from 'node:path';
import { readFileSync, writeFileSync } from 'node:fs';

const modeListBase = '../src/components/education/components';
// https://vite.dev/config/
const options = merge({}, commonViteConfig, {
    build: {
        outDir: '../es',
    }
});
const esmComBuilder = new EsmComBuilder(modeListBase, options);
const modeList = fs.readdirSync(modeListBase);

modeList.forEach(mode => {
    mode !== 'index.ts' ? esmComBuilder.executeBuild(mode).then(closeCallback) : null;
});

function closeCallback([_, inlineConfig, comAppName] = []) {
    // 把css 写入index.js文件
    const indexPath = join(inlineConfig.build.outDir, `${comAppName}/index.js`);
    // 插入前面
    const indexContent = readFileSync(indexPath, 'utf-8');
    const cssContent = `// css \n import './css/index.css';\n // # end css mapping css/index.css \n`
    writeFileSync(indexPath, cssContent + '\n' + indexContent);
}