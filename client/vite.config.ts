import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const __dirname: string = path.dirname(import.meta.filename);

    return  {
        // Warning: this exposes the web server's env to the client/browser!
        // https://dev.to/boostup/uncaught-referenceerror-process-is-not-defined-12kg
        define: {
            'process.env': env
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            }
        }
    };
})
