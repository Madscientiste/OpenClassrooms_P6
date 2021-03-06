const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            title: "Just Stream it",
            template: "./src/template.html",
        }),
    ],
    mode: "development",
    devServer: {
        hot: true,
        host: '0.0.0.0',
        contentBase: "./dist",
    },
    output: {
        filename: "bundle.js",
        clean: true,
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                "@babel/plugin-transform-react-jsx",
                                { pragma: "createElement", pragmaFrag: "'fragment'" }
                            ],
                            [
                                "@babel/plugin-transform-runtime"
                            ]
                        ]

                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
};
