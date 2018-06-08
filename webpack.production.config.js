var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var CompressionWebpackPlugin = require('compression-webpack-plugin');


//先清空build文件夹下的文件
var fs = require('fs');
var	buildPath='./build/';
var folder_exists = fs.existsSync(buildPath);
if(folder_exists == true)
{
   var dirList = fs.readdirSync(buildPath);
   dirList.forEach(function(fileName)
   {
       fs.unlinkSync(buildPath + fileName);
   });
   console.log("clearing " + buildPath);
};

module.exports = {

    devtool: 'false',

	//入口文件配置

	entry: {
        main: [
            path.resolve(__dirname, './index.jsx')
        ],
        vendor: ['react', 'react-dom']
    },
	//输出文件配置
	output: {
		path: path.join(__dirname, 'build'),
		filename: '[hash].bundle.js',
	},
	//更多配置项
	resolve: {
        root: path.resolve(__dirname, './app'),

		extensions: ['', '.js', '.jsx']    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
	},
	//文件的加载配置
	module: {
		loaders: loaders
	},

    postcss: function() {
        return [
            require('autoprefixer')({ browsers: ["Android >= 4", "iOS >= 7"] })
        ];
    },

	//插件配置
	plugins: [
 
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new ExtractTextPlugin('[name].css', { allChunks: true }),

        new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
        new HtmlWebpackPlugin({
            hash: true,
            template: path.resolve(__dirname, './index.html'),
        }),
        // new CompressionWebpackPlugin({ //gzip 压缩
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: new RegExp(
        //         '\.(js|css)$'    //压缩 js 与 css
        //     ),
        //     threshold: 10240,
        //     minRatio: 0.8
        // }),

        //Webpack提供了设置环境变量来优化代码的方案
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	    })
	]
};
