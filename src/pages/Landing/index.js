import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/counterSlice";
import { spiritCardSlice } from "../../store/spiritSlice";

 export default function LandingPage() {

  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  const [subType, setSubType] = useState(null);
  const [name, setName] = useState(null);
  const [proof, setProof] = useState(null);

  const handleTypeChange = (e) => {
    const inputValue = e.target.value;
    setType(inputValue);
    //console.log(type)
  };

  const handleSubTypeChange = (e) => {
    const inputValue = e.target.value;
    setSubType(inputValue);
    console.log(subType);
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    setName(inputValue);
    console.log(name);
  };

  const handleProofChange = (e) => {
    const inputValue = e.target.value;
    setProof(inputValue);
    console.log(proof);
  };
  
  const handleClick = () => {
    console.log(type);
  //dispatch(spiritCardSlice.addSpiritCard(newCard));
  }

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding bottles to your almanac!</p>
      <form>
        <input type="text" placeholder="Spirit Type" onChange={handleTypeChange} />
        <br/>
        <input type="text" placeholder="Spirit Subtype" onChange={handleSubTypeChange} />
        <br/>
        <input type="text" placeholder="Spirit Name" onChange={handleNameChange} />
        <br/>
        <input type="text" placeholder="Spirit Proof" onChange={handleProofChange} />
        <br/>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

//commented out, but saved for later Redux application
{/* <div>
<button onClick={() => dispatch(increment())}>Increment</button>
<span>{count}</span>
<button onClick={() => dispatch(decrement())}>Decrement</button>
</div> */}
// const count = useSelector((store) => store.counter.value)