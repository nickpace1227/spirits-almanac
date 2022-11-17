import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { decrement, increment } from "../../store/counterSlice";
import { addCard } from "../../store/cardSlice";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  const [subType, setSubType] = useState(null);
  const [brand, setBrand] = useState(null);
  const [proof, setProof] = useState(null);
  const inventory = useSelector((store) => store.inventory.cards);

  const handleClick = () => {
    const newCard = {
      type: type,
      subType: subType,
      brand: brand,
      proof: proof,
    };
    dispatch(addCard(newCard));
  };

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding bottles to your almanac!</p>
      <form>
        <input
          type="text"
          placeholder="Spirit Type"
          onChange={(event) => setType(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Subtype"
          onChange={(event) => setSubType(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Name"
          onChange={(event) => setBrand(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Proof"
          onChange={(event) => setProof(event.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
      <div>Card Details here:</div>
      <div>
        {inventory.map((card, index) => {
          return <div key={index}> {JSON.stringify(card)} </div>;
        })}
      </div>
    </div>
  );
}

//commented out, but saved for later Redux application
{
  /* <div>
<button onClick={() => dispatch(increment())}>Increment</button>
<span>{count}</span>
<button onClick={() => dispatch(decrement())}>Decrement</button>
</div> */
}
//
