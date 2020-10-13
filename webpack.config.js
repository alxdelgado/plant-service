// import dependencies 
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

// create webpack export
module.exports = {
    context: __dirname,
    entry: { index: path.join(__dirname, 'src/index.js') },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: 'babel-loader',
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        })
    ]
};