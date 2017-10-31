/*===============================================
                MENU REDUCER
=================================================*/
import * as types  from '../constants/actionTypes'
import store  from '../store/configureStore'
import initialMenuState  from './initialMenuState'


export const menuReducer = function(state = initialMenuState, action) {
  switch(action.type) {

    case types.TOGGLE_OPEN:
      return Object.assign({}, state, { open: action.open });

    case types.GET_CHAIRS:
      return Object.assign({}, state, { chairs: action.chairs });

    default:
      return state;
  }
}

export default menuReducer;
