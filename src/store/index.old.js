import { createStore } from "redux";

const INITIAL_STATE = { counter: 0, showCounter: true };


export const INCREMENT = "increment";

export const CHANGE_VALUE = "change_value";

export const DECREMENT = "decrement";

export const TOGGLE = "toggle";

const counterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === INCREMENT) {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === CHANGE_VALUE) {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  }

  if (action.type === DECREMENT) {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === TOGGLE) {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
