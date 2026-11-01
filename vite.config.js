import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // expose env vars prefixed with VITE_ to client
  envPrefix: 'VITE_'
});
