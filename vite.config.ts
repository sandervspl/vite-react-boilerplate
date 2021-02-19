import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
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
  plugins: [reactRefresh()],
  resolve: {
    alias,
  },
});

