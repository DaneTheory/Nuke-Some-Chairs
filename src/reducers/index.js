/*===============================================
                ROOT REDUCER
          **Main Reducer Used In Store**
=================================================*/
import { combineReducers } from 'redux'
import menuReducer  from './menuReducer'

const rootReducer = combineReducers({
  menuReducer
});

export default rootReducer;
