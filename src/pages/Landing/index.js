import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";

function LandingPage() {
  const count = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();
  const handleSubmit = () => {

  }

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding bottles to your almanac!</p>
      <form>
        <input type="text" placeholder="Spirit Type" />
        <br/>
        <input type="text" placeholder="Spirit Subtype" />
        <br/>
        <input type="text" placeholder="Spirit Name" />
        <br/>
        <input type="text" placeholder="Spirit Proof" />
        <br/>
        <button onSubmit={handleSubmit}>Add Spirit</button>
      </form>
    </div>
  );
}

export default LandingPage;


//commented out, but saved for later Redux application
{/* <div>
<button onClick={() => dispatch(increment())}>Increment</button>
<span>{count}</span>
<button onClick={() => dispatch(decrement())}>Decrement</button>
</div> */}
