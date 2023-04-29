import { resolve } from 'path';


export const root = resolve(__dirname, './src');
export const server = {
  port: 3001,
};
export const build = {
  outDir: resolve(__dirname, './public'),
  emptyOutDir: true,
  minify: false,
};
export const optimizeDeps = {
  include: ['react', 'react-dom'],
};
