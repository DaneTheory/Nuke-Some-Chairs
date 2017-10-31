/*===============================================
    PRIMARY ENTRY POINT FOR REDUX AND REACT APP
=================================================*/
/* eslint-disable import/default */
import React  from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes  from './routes'
import configureStore  from './store/configureStore'
import './styles/styles.scss'

// if (process.env.NODE_ENV !== 'production') {
//   whyDidYouUpdate(React)
// }

export const store = configureStore();
// store.dispatch({
//   type: 'TOGGLE_OPEN',
//   open: false
// })

// store.getState();


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production' && !window.devToolsExtension) {
    const devtools = require('./server/devtools');
    devtools.default(store);
}
