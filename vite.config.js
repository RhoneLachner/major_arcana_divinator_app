import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'about-us': resolve(__dirname, 'about-us/index.html'),
                'about-tarot': resolve(__dirname, 'about-tarot/index.html'),
                'reading-room': resolve(__dirname, 'reading-room/index.html'),
                'recent-cards': resolve(__dirname, 'recent-cards/index.html'),
            },
        },
    },
});
