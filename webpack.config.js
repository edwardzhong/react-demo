var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    devtool: 'source-map',
    entry:{
        index:'./index'
    },
    output:{
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    devServer: {
        port:3003,
        compress:true,
        contentBase: "build/",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {//在配置文件里添加 loader
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory=true',
                query: {
                    presets: ['es2015','react','stage-0']
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [{
                    loader: 'css-loader',
                      options: {
                        minimize: true
                      }
                    },'postcss-loader','less-loader']
              })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=20000'
            },
            // {
            //     test: /\.jsx?$/,
            //     enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
            //     include: /src/,  // src文件夹下的文件需要被lint
            //     use: [{
            //         loader: 'eslint-loader',
            //         options: {
            //             formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
            //         }
            //     }]
            //     // exclude: /node_modules/ 可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
            // }
        ],
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        // new CommonsChunkPlugin({            
        //  name: "index",
        //     chunks: ["index","index.bundle"],
        //     minChunks: 2
        // }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function() {
                    return [require('autoprefixer')];
                }
            }
        }),
        new ExtractTextPlugin({ 
            filename: 'main.[hash].css'
        }),
        // new webpack.optimize.UglifyJsPlugin({//压缩文件
        //     sourceMap: true
        // }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: __dirname + "/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ]
}