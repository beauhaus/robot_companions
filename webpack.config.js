const path = require('path');
module.exports = (env) => {
    const isProd = env === 'production';
    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, "public"),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            }
            ]
        },
        devtool: isProd? 'source-map': 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true
        }
    }
}
