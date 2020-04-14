import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// const firstReducer = 1;
// firstReducer = firstReducer + 1;
const firstReducer = (state = 1, action) => {
  if (action.type === "KITTY_CAT") {
    // console.log(state);
    return state + action.payload;
  }
  return state;
};

const secondReducer = (state = 10, action) => {
  if (action.type === "PUPPY_DOG") {
    // console.log("Second Reducer: ", state, action);
  }
  return state;
};

// const primeKcEmployees = ['Scott', 'Rachael', 'Myron'];
// const primeMspEmployees = ['Mark', 'Christy', 'Dev'];
// const allPrimeEmployees = [...primeKcEmployees, ...primeMspEmployees];

const elementListReducer = (state = [], action) => {
  if (action.type === "ADD_ELEMENT") {
    return [...state, action.payload];
  }
  return state;
};

// const wizardReducer = (state = {}, action) => {
//   if(action.type === "UPDATE_WIZARD") {
//     // return ?
//     return {
//       ...state,
//       newPropertyHere: action.payload
//     }
//   }
//   return state;
// }

const storeInstance = createStore(
  combineReducers({
    firstReducer,
    secondReducer,
    elementListReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
