import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/frontend/', // Base path for your project
 build: {
    outDir: 'dist', // Output directory for the build
 },
  plugins: [react()],
})
