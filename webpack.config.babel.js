import webpack from 'webpack';
import path from 'path';

const outputPath = path.join(__dirname, 'app', 'dist');
export default {
  target: 'electron',
  entry: {
    main: './src/main/index.js',
    preload: './src/preload/index.js',
  },
  output: {
    path: outputPath,
    filename: '[name].js',
  },
  externals: [
    (context, request, callback) => {
      callback(null, request.charAt(0) === '.' ? false : `require("${request}")`);
    },
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules', 'src/preload/style'],
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.DefinePlugin({ $dirname: '__dirname' })],
};
