const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 9000,
        open: true,
        compress: true,
        static: {
            directory: path.resolve(__dirname, '.')
        }
    }
};