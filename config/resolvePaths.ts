import path from 'path';

import tsconfig from '../tsconfig.json';

const paths: Record<string, string> = {};

for (let key in tsconfig.compilerOptions.paths) {
  let val: string = tsconfig.compilerOptions.paths[key][0];

  if (key.endsWith('/*')) {
    key = key.split('/*')[0];
  }

  if (val.endsWith('/*')) {
    val = val.split('/*')[0];
  }

  paths[key] = path.resolve(tsconfig.compilerOptions.baseUrl, val);
}

export default paths;
