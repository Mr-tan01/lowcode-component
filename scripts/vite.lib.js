
import { EsmComBuilder } from './build.cli.js';

// https://vite.dev/config/
const esmComBuilder = new EsmComBuilder('../src/components/education/components');

esmComBuilder.executeBuild('BgCommon');
esmComBuilder.executeBuild('Header');

// main
const esmComBuilder2 = new EsmComBuilder('../src/components', {
    build: {
        outDir: '../dist',
    }
});
esmComBuilder2.executeBuild('education');
