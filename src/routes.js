/*===============================================
          PRIMARY ROUTER CONFIG FOR APP
=================================================*/
/* eslint-disable */
import React  from 'react'
import { Route, IndexRoute } from 'react-router'
import App  from './components/App'
import NotFoundPage  from './components/NotFoundPage'
import MainLayout  from './layouts/MainLayout'


export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainLayout}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
/* eslint-enable */
