import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import html from 'vite-plugin-html';
import reactSvg from 'vite-plugin-react-svg';
import legacy from '@vitejs/plugin-legacy';

import globals from './config/globals';
import tsconfig from './tsconfig.json';

const alias: Record<string, string> = {};

for (let key in tsconfig.compilerOptions.paths) {
  let val: string = tsconfig.compilerOptions.paths[key][0];

  if (key.endsWith('/*')) {
    key = key.split('/*')[0];
  }

  if (val.endsWith('/*')) {
    val = val.split('/*')[0];
  }

  alias[key] = path.resolve(tsconfig.compilerOptions.baseUrl, val);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvg({
      defaultExport: 'component',
    }),
    html({
      inject: {
        injectData: {
          title: 'vite-react-boilerplate',
        },
      },
    }),
    legacy({
      targets: [
        '> 0.2%',
        'ie 11',
        'not dead',
        'not op_mini all',
      ],
    }),
  ],
  resolve: {
    alias,
  },
  define: globals,
});

