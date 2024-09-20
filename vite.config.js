import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/pages/welcome/app.js',
                'resources/js/pages/psy/app.js',
                'resources/js/pages/lk/app.js',
                'resources/js/pages/gift/app.js',
                'resources/js/pages/tests/app.js',
                'resources/js/pages/knowledge/app.js',
                'resources/js/pages/test/app.js'
            ],
            refresh: true,
        }),
        react()
    ],
    resolve: {
        alias: {
            '@': '/resources',
        },
    },
});
