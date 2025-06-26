import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  base: '/Weather-Forecasting-Application/',  // ✔️ correct spelling!
  plugins: [preact()],
});
