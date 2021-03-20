import { BUY_CAKE } from './cakeTypes';

const initialState = {
  numOfCakes: 10,
};
// reducer memiliki dua parameter, yaitu (state, action)
const cakeReducer = (state = initialState, action) => {
  // mednefinisikan switch statment
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
// setelah bikin reducer, lanjut ke recux store (state)
