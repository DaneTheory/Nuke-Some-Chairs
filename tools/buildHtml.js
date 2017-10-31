import cheerio  from 'cheerio'
import fs  from 'fs'
import { chalkSuccess, chalkError, chalkWarning } from './chalkConfig'

const useTrackJs = true;
const trackJsToken = '';

fs.readFile('src/index.html', 'utf8', (readError, markup) => {
  if (readError) {
    return console.log(chalkError(readError));
  }

  const $ = cheerio.load(markup);
  $('head').append('<link rel="stylesheet" href="/styles.css">');

  if (useTrackJs) {
    if (trackJsToken) {
      const trackJsCode = `<!-- BEGIN TRACKJS Note: This should be the first <script> on the page per https://my.trackjs.com/install --><script>window._trackJs = { token: '${trackJsToken}' };</script><script src=https://d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js></script><!-- END TRACKJS -->`;

      $('head').prepend(trackJsCode);
    } else {
      console.log(chalkWarning('To track JavaScript errors, sign up for a free trial at TrackJS.com and enter your token in /tools/build.html on line 10.'));
    }
  }

  fs.writeFile('dist/index.html', $.html(), 'utf8', (writeError) => {
    if (writeError) {
      return console.log(chalkError(writeError));
    }
    console.log(chalkSuccess('index.html written to /dist'));

    return writeError;
  });

  return readError;
});
