
const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env ? process.env : 'development';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    context:path.join(__dirname,'/src'),
    entry:'./main.js',
    output:{
        path: __dirname +'/dist',
        filename:'build.js'
    },
    watch:true,
    watchOptions:{
      aggregationTimeout:100
    },
    devtool:NODE_ENV === 'development' ? 'cheap-module-eval-source-map' : 'source-map',
    plugins:[
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV:JSON.stringify(NODE_ENV)
        }),
        new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([{
            from: './index.html'
        }])
    ],
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                loader: 'babel',
                query: {
                    presets: ['es2015','react','stage-0']
                }
            },
            {
                test: /(\.css|\.scss)$/,
                loader: ExtractTextPlugin.extract("css?sourceMap!sass?sourceMap")
            }
        ]
    }
};