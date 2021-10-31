const path = require('path');

module.exports = {
    mode:"development",
    entry: {
        BookStore : './dist/BookStore.js',
        ColorSwitcher : './dist/ColorSwitcher.js',
        Food : './dist/Food.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/js'),
    },
};