const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  mode: isDevelopment ? 'development' : 'production',
  devServer: {
    hot: true,
  },
  entry: './src/main.ts',
  target: 'electron-renderer',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      //util: require.resolve('util/'),
      assert: require.resolve('assert/'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    alias: require('./webpack.aliases.js'),
  },
  plugins: require('./webpack.plugins'),
};
