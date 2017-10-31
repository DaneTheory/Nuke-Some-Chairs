import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.dev';

const bundler = webpack(config);

browserSync({
  server: {
    baseDir: 'src',

    middleware: [
      webpackDevMiddleware(bundler, {

        publicPath: config.output.publicPath,

        stats: { colors: true },

        noInfo: true

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      webpackHotMiddleware(bundler),
      historyApiFallback()
    ]
  },

  files: [
    'src/*.html'
  ]
});
