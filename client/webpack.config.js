const path = require('path');

module.exports = {
    mode:"development",
    entry: {
        BookStore : './dist/BookStore.js',
        ColorSwitcher : './dist/ColorSwitcher.js',
        
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../public/js'),
    },
};