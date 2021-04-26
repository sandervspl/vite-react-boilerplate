// https://vitejs.dev/config/

import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import html from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';
import tsconfigPaths from 'vite-tsconfig-paths';

import globals from './config/globals';


export default defineConfig({
  plugins: [
    reactRefresh(),
    tsconfigPaths(),
    svgr(),
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
  define: globals,
});
