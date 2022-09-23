import { useSelector, useDispatch } from "react-redux";
// import { TOGGLE, CHANGE_VALUE, INCREMENT, DECREMENT } from "../store/index";
import { counterActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    //dispatch({ type: TOGGLE });
    dispatch(counterActions.toggle());
  };

  const incrementHandler = () => {
    //dispatch({ type: INCREMENT });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // dispatch({ type: CHANGE_VALUE, value: 10 });
    dispatch(counterActions.change(10));
  };

  const decreaseHandler = () => {
    // dispatch({ type: CHANGE_VALUE, value: -10 });
    dispatch(counterActions.change(-10));
  };

  const decrementHandler = () => {
    // dispatch({ type: DECREMENT });
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Add 10</button>
        <button onClick={decreaseHandler}>Subtract 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
