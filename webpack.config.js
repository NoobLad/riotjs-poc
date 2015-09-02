var webpack = require('webpack');

module.exports = {
    entry: './app/index',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            riot: 'riot'
        })
    ],
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.tag$/,
                exclude: /node_modules/,
                loader: 'riotjs-loader',
                query: {type: 'none'}
            }
        ],
        loaders: [
            {
                test: /\.js|\.tag$/,
                exclude: /node_modules/,
                loader: 'babel-loader?optional[]=runtime&stage=0'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less!autoprefixer?browsers=last 2 versions'
            }
        ]
    },
    devServer: {
        contentBase: './public'
    }
};
