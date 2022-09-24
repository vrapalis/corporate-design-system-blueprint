const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '.'),
        port: 9000,
        open: true
    }
};