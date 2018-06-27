const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js', //相对路径
	output: {
		path: path.resolve(__dirname, 'build'), //打包文件的输出路径
		filename: 'bundle.js' //打包文件名
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		port: 9001, //端口改为9000
		open: true // 自动打开浏览器，适合懒人
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html'
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'react']
				}
			},
			{
				test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
				loader: 'url-loader',
				options: {
					limit: 10000, //该大小以下图片会转成base64
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer'), //自动添加浏览器前缀
								require('precss'), //如果要使用less就不用这个插件了，precss语法类似于sass
								require('postcss-flexbugs-fixes') //解决flex布局的一些bug
							]
						}

					},
				]
			}
		]
	},
}