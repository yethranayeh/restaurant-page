/** @format */

const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,

				type: "asset/resource"
			},
			{
				test: /\.css$/i,

				use: ["style-loader", "css-loader"]
			}
		]
	},
	// Image compression
	optimization: {
		minimizer: [
			"...",
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.squooshMinify,
					options: {
						encodeOptions: {
							mozjpeg: {
								quality: 75
							}
						}
					}
				}
			})
		]
	}
};
