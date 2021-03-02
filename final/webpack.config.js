const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    devtool: false,

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },

    module: {
        rules: [

            {
                test: /\.js$/,
                //exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', { targets: "ie 11" }]
                    ],
                },
            },

            // {
            //     test: /\.jpg$/i,
            //     test: /\.(png|jpe?g|gif)$/i,
            //     loader: 'file-loader',
            //     options: {
            //         name: '[name]-[contenthash].[ext]',
            //     },
            // },

            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'url-loader',
                options: {
                    name: '[name]-[contenthash].[ext]',
                    limit: 1,
                },
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'image-webpack-loader',
            },

            {
                test: /\.s?css$/,
                use: [
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'src/index.html' }],
        }),
        // new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },

};
