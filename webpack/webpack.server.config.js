const path = require('path');

module.exports = {
    entry: './source/server.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, '../build/server')
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['latest-minimal', 'react']
                }
            }
        ]
    },
    target: 'node',
}