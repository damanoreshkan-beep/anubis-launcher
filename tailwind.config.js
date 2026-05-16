/** @type {import('tailwindcss').Config} */
// Anubis World design system is the canonical source for palette,
// fontFamily, and keyframes. Local config only declares content
// roots — everything visual is delegated to the shared preset.
const anubisPreset = require('@anubis/ds/dist/tailwind-preset.cjs')

module.exports = {
    presets: [anubisPreset],
    content: [
        './app/**/*.ejs',
        './app/**/*.js',
        './app/assets/js/**/*.js',
    ],
    plugins: [],
}
