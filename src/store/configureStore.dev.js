/*===============================================
                STORE CONFIG FOR DEV
                **Runs when ENV is set
                to 'development'.
=================================================*/
/* eslint-disable */
import { applyMiddleware, createStore, compose } from 'redux'
//import Devtool  from '../../../boilerplate9/src/assets/Devtool.js'
import * as types  from '../constants/actionTypes'
import rootReducer  from '../reducers'
// import Debug  from 'redux-debug'
// import logger  from 'redux-diff-logger'
// import faviconMiddleware  from 'redux-favicon'
// import createLogger  from 'redux-logger'
// import notify  from 'redux-notify'
// import perflogger  from 'redux-perf-middleware'
// import soundsMiddleware  from 'redux-sounds'
// import thunk  from 'redux-thunk'
// import reduxUnhandledAction  from 'redux-unhandled-action'
/* eslint-enable */

// const freeze = require('redux-freeze');
// const immutableInvariant = require('redux-immutable-state-invariant')();

/* eslint-disable */
// const unhandledActionCB = (action) => console.error(`${action} didn't lead to creation of a new state object`);
/* eslint-enable */

// const middlewares = [thunk];
// const mainLogger = createLogger();
// middlewares.push(mainLogger, freeze);
//
// const faviconConfig = {
//   animation:  'slide',
//   position:   'up',
//   type:       'rectangle',
//   bgColor:    '#3D3D3D',
//   textColor:  '#FFFFFF'
// };
//
// const soundsData = {
//   // If no additional configuration is necessary, we can just pass a string  as the path to our file.
//   endTurn: '../public/media/audio/sound4.mp3',
//
//   // Alternatively, we can pass a configuration object.
//   // All valid howler.js options can be used here.
//   winGame: {
//     urls: [
//       '',
//       ''
//     ],
//     volume: 0.75
//   },
//
//   // Audio sprites are supported. They follow the Howler.js spec.
//   // Each sprite has an array with two numbers:
//   //   - the start time of the sound, in milliseconds
//   //   - the duration of the sound, in milliseconds
//   jumps: {
//     urls: [ '' ],
//     sprite: {
//       lowJump: [0, 1000],
//       longJump: [1000, 2500],
//       antiGravityJump: [3500, 10000]
//     }
//   }
// };

// const loadedFaviconMiddleware = faviconMiddleware(faviconConfig);
// const loadedSoundsMiddleware = soundsMiddleware(soundsData);

// const notifyEvents = [
//   {
//     catch: types.SAVE_FUEL_SAVINGS,
//     dispatch: action.saveFuelSavings
//   }
// ];

// Debug(console.log, true)
// notify(notifyEvents)

// const store = compose(applyMiddleware(...middlewares))(createStore)(reducer);

export default function configureStore(initialState) {
  // const store = createStore(rootReducer, initialState, compose(
  //   applyMiddleware(...middlewares, loadedFaviconMiddleware, loadedSoundsMiddleware, logger, perflogger, immutableInvariant, reduxUnhandledAction(unhandledActionCB)),
  //   reduxReset(),
  //   window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
  //   )
  // );
  const store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
