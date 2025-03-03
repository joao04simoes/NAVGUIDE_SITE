import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/joao.simoes/NAVGUIDE/', // <-- Define a pasta base correta
});
