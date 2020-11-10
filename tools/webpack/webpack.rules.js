const inDev = process.env.NODE_ENV === 'development';

module.exports = [
  {
    // Add support for native node modules
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    // Webpack asset relocator loader
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    // Typescript loader
    test: /\.tsx?$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'less-loader' }],
  },
  {
    // Images Loader
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          publicPath: 'images',
          outputPath: inDev ? 'images' : './main_window/images',
        },
      },
    ],
  },
  {
    // Fonts loader
    test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          limit: 10000,
          mimetype: 'application/font-woff',
          publicPath: 'fonts',
          outputPath: inDev ? 'fonts' : './main_window/fonts',
        },
      },
    ],
  },
];
