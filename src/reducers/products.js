import *as Types from '../actions/types';
import findIndex from '../utils/findIndex';

var initialState = [];
const products = (state = initialState, action) => {
  switch(action.type){
    case Types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];

    case Types.ADD_PRODUCTS:
      state.push(action.product)
      return [...state];
    
    case Types.DELETE_PRODUCTS:
      const index = findIndex(state, action.id)
      state.splice(index, 1)
      return [...state];

    default:
      return [...state]
  }
}
export default products