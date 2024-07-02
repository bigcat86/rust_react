const path = require('path');

module.exports = {
  webpack: function (config, env) {
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'javascript/auto',
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: 'static/js',
            outputPath: 'static/js',
            name: '[name].[hash:8].[ext]',
          },
        },
      ],
    });

    config.resolve.extensions.push('.wasm');

    return config;
  },
};
