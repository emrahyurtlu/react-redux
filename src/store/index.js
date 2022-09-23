import { createSlice, configureStore } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: INITIAL_COUNTER_STATE,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    change(state, action) {
      state.value = state.value + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const INITIAL_AUTH_STATE = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;


export default store;
