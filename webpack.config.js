var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/imageZoom.js',
    output: {
        path: path.resolve('lib'),
        filename: 'imageZoom.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            }
        ]
    }
}