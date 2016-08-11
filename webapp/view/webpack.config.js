var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: './app/main.js',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 8100
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'react-hot!babel-loader', exclude: /node_modules/ },
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css-loader?sourceMap!less-loader?sourceMap!autoprefixer-loader?browsers=last 2 versions') },
            // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&minetype=application/font-woff' },
            // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('bundle.css', { allChunks: true })
    ],
    debug: true,
    stats: {
        colors: true,
        reasons: true
    },
}
