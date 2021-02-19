import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import html from 'vite-plugin-html';
import reactSvg from 'vite-plugin-react-svg';
import legacy from '@vitejs/plugin-legacy';

import globals from './config/globals';
import paths from './config/resolvePaths';

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
    alias: paths,
  },
  define: globals,
});
