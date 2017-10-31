/*===============================================
                ACTION CREATORS
=================================================*/
import * as types  from '../constants/actionTypes'

// Boolean Toggle For Menu
export function toggleOpen(open) {
  return {
    type: types.TOGGLE_OPEN,
    open
  };
}

// Creates Chairs
export function getChairsSuccess(chairsArr, chairs) {
  return {
    type: types.GET_CHAIRS,
    getChairs: getChairs(chairsArr, chairs),
    chairs: chairsArr
  };
}

// "Middleware"-esque Chair Creation Callback
// Mimics An Async Action.  
export function getChairs(chairsArr, chairs) {
    const start = start || 1;
        for (let i = start; i <= chairs; i++) {
          chairsArr.push(i);
          chairsArr.sort(function(a, b) {
            return a - b;
          })
        }
      return chairsArr
}
