/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "indigo": "#3730a3",
                "altindigo": "#a1aacd",
                "border": "#1f2937",
                "border-hv": "#131921",
                "spotify": "#26d864",
            }
        },
    },
    plugins: [],
}