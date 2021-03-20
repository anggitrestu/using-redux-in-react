const redux = require('redux');
const createStore = redux.createStore;
const combineReduces = redux.combineReducers;
const applyMiddlewares = redux.applyMiddleware;
// menambhakn middleware
const reduxLogger = require('redux-logger');
// membuat logger
const logger = reduxLogger.createLogger();
// mendifinisikan action dengan strin constants
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action',
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: 'to buy ice cream',
  };
}

// (previosusState, action) => newState
// harus di represntasikan dengan singleObject

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICE_CREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };

//     default:
//       return state;
//   }
// };
const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};
const rootReducer = combineReduces({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddlewares(logger));
const unsubscribe = store.subscribe(() => {});
console.log('initialState', store.getState());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
