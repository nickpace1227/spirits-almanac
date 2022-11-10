import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

function LandingPage() {
  const count = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default LandingPage;
