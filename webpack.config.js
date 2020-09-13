const path = require('path')

module.exports = {
    mode: 'production',
    entry: './styles/common.css',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.css.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
}