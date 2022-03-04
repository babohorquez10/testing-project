import { scoopAmount, toppingAmount } from '../utils/amounts';
import { ADD_SCOOPS, ADD_TOPPINGS } from './actions';

const initialState = {
  scoopsTotal: 0,
  toppingsTotal: 0,
  total: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SCOOPS:
      const scoopsTotal =
        state.scoopsTotal + action.payload.number * scoopAmount;

      return {
        ...state,
        scoopsTotal,
        total: scoopsTotal + state.toppingsTotal
      };
    case ADD_TOPPINGS:
      const toppingsTotal =
        state.toppingsTotal + action.payload.number * toppingAmount;

      return {
        ...state,
        toppingsTotal,
        total: toppingsTotal + state.scoopsTotal
      };
    default:
      return state;
  }
}

export default reducer;
