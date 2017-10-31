import browserSync  from 'browser-sync'
import historyApiFallback  from 'connect-history-api-fallback'

browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: 'dist'
  },

  files: [
    'src/*.html'
  ],

  middleware: [historyApiFallback()]
});
