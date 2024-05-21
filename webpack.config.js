const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const listOfHTMLFiles = [
  {
    filename: 'index.html',
  },
	{
		filename: 'header.html',
		template: 'header.html',
	},
  {
    filename: 'family.html',
    template: 'family.html',
  },
  {
    filename: 'country.html',
    template: 'country.html',
  },
  {
    filename: 'footer.html',
    template: 'footer.html',
  }
];

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
	},
	plugins: [
    ...listOfHTMLFiles.map(template => new HtmlWebpackPlugin(template)),
	new MiniCssExtractPlugin({
		filename: 'main.css'
	})

  ],
	mode: 'development',
	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			// Fonts and SVGs
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			// CSS, PostCSS, and Sass
			{
				test:  /\.s[ac]ss$/i, 
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					}, 
					'css-loader', 
					'postcss-loader', 
					'sass-loader'],
			},
		],
	},
	devServer: {
		static: './dist',
		open: true,
	},
};
