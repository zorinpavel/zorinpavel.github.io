import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react'
import * as path from 'path';
import { defineConfig } from 'vite'


export default defineConfig({
    envPrefix: 'FF',
    base: '/',
    build: {
        target: 'esnext' //browsers can handle the latest ES features
    },
    server: {
        // host: '127.0.0.1',
        port: Number(process.env.PORT),
        // https: true,
    },
    plugins: [
        react(),
        basicSsl(),
    ],
    css: {
        modules: {
            localsConvention: 'camelCase'
        },
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@scss/config.scss" as *;'
            }
        }
    },
    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, './scss'),
            types: path.resolve('src/types'),
            kit: path.resolve('src/kit'),
            hooks: path.resolve('src/hooks'),
            components: path.resolve('src/components'),
        },
    }
})
