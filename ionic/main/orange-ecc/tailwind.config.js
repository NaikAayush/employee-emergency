const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'media',
    corePlugins: {
        fontFamily: false,
    },
    prefix: '',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './src/**/*.{html,ts}',
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {

        extend: {
            colors: {
                yellow: {
                    1000: '#ffe600'
                }
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        }
    },
    plugins: [],
};