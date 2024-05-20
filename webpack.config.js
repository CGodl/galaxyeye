const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const listOfHTMLFiles = [
  {
    filename: 'index.html',
    template: 'src/index.html',
  },
	{
		filename: 'header.html',
		template: './src/header.html',
	},
  {
    filename: 'family.html',
    template: './src/family.html',
  },
  {
    filename: 'country.html',
    template: './src/country.html',
  },
  {
    filename: 'footer.html',
    template: './src/footer.html',
  }
];

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	plugins: [
    ...listOfHTMLFiles.map(template => new HtmlWebpackPlugin(template))

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
				test: /\.(scss|css)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		static: './dist',
		open: true,
	},
};
