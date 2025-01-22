
import { EsmComBuilder } from './build.cli.js';

// https://vite.dev/config/
export const esmComBuilder = new EsmComBuilder();

esmComBuilder.executeBuild('BgCommon');
esmComBuilder.executeBuild('Header');
