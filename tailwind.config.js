/** @type {import('tailwindcss').Config} */
const primeui = require("tailwindcss-primeui");

export default {
    darkMode: ['class', '.app-dark'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    plugins: [primeui],
};
