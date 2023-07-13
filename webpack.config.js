const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
			{
				test: /\.css$/i,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|otf)$/,
				type: 'asset/resource',
			},
			{
				test: /\.(jpg|png)$/,
				use: {
				  loader: 'url-loader',
				},
			  },
		
		],

	},
	resolve:{
		extensions: ['.tsx', '.ts', '.js'],
	},
	output:{
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js',
	},
	devServer: {
		static: path.join(__dirname, './dist'),
		compress: true,
		port: 3000,
	},
};