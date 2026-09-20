import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      // Vite 4 still uses Sass's legacy API; hide the warning until we can move to a newer Vite.
      scss: { silenceDeprecations: ['legacy-js-api'] },
    },
  },
});
