/*===============================================
                STORE CONFIG FOR PROD
                **Runs when ENV is set
                to 'production'.
=================================================*/
import { createStore } from 'redux'
import rootReducer  from '../reducers'

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
