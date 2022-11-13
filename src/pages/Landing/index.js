import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";
import { spiritCardSlice } from "../../store/spiritSlice";

function LandingPage() {
  // const count = useSelector((store) => store.counter.value);
  // const dispatch = useDispatch();
  const handleSubmit = (event) => {
  //   const newCard = event.target.value;
  //   dispatch(spiritCardSlice.addSpiritCard(newCard));
  console.log(event.target.value);
  }

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding bottles to your almanac!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Spirit Type"/>
        <br/>
        <input type="text" placeholder="Spirit Subtype" />
        <br/>
        <input type="text" placeholder="Spirit Name" />
        <br/>
        <input type="text" placeholder="Spirit Proof" />
        <br/>
        <button type="submit">Add Spirit</button>
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
