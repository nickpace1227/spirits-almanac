import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";
import { spiritCardSlice } from "../../store/spiritSlice";

function LandingPage() {

  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  const [subType, setSubType] = useState(null);
  const [name, setName] = useState(null);
  const [proof, setProof] = useState(null);

  const handleClick = (e) => {
    const inputValue = e.target.value;
    setType(inputValue);
    console.log(type);
  //dispatch(spiritCardSlice.addSpiritCard(newCard));
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
        <button onClick={handleClick}>Add Bottle<button/>
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
// const count = useSelector((store) => store.counter.value);