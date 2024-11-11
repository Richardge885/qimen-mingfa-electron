/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
    content: {
        files: ['./index.html', './src/ui/**/*.{js,ts,jsx,tsx}'],
        extract,
    },
    theme: {
        screens,
        fontSize,
        extend: {
            screens: {
                base: '25rem', // base 400
                fourfourty: '27.5rem', // 440px
                foureighty: '30rem', // 480px
                five: '31.25rem', // 500px
                largest: '41.5rem', // 664px
            },
            fontFamily: {
                kaiti: 'kaiti',
                lishu: 'lishu',
            },
            colors: {
                // 基本配色
                bglight: '#F7F3E8',
                bgdark: '#F0E8D6',
                red: '#9E2E22',
                red: '#9E2E22',
                border: '#886A36',
                text: '#362420',
                highlight: '#FFE504', // 新创
                // highlight: '#FBEB5F', // 原版

                // 五行颜色
                jin: '#E79822',
                mu: '#2E905B',
                shui: '#237ED8',
                huo: '#E94C43',
                tu: '#866436',
            },
        },
    },
    plugins: [fluid],
};
