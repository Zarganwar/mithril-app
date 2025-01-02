const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    // mode: 'production',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, // .sass, .scss
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",   // Translates CSS into CommonJS
                    "sass-loader",  // Compiles Sass to CSS
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({template: '/public/index.html'}),
        new MiniCssExtractPlugin(),
    ],
};