const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.(woff|woff2|ttf)$/,
				use: {
					loader: 'url-loader'
				}
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
		fallback: {
			path: false,
			os: false,
			fs: false
		}
	}
}
