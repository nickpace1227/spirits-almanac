import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, toggleFavorite } from "../../store/cardSlice";
import {v4 as uuidv4} from "uuid";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [brand, setBrand] = useState("");
  const [proof, setProof] = useState("");
  const [notes, setNotes] = useState("");
  const cards = useSelector((store) => store.inventory.cards);
  
  const clearForm = () => {
    setType("");
    setSubType("");
    setBrand("");
    setProof("");
    setName("");
    setNotes("");
  };

  const handleClick = () => {
    const newCard = {
      name: name,
      type: type,
      subType: subType,
      brand: brand,
      proof: proof,
      notes: notes,
      favorite: false,
      id: uuidv4(),
    };
    if (name === "" || type === "") {
      return (alert("Please enter a name and type of spirit."))
    } else {
      dispatch(addCard(newCard));
      clearForm();
    }
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card))
  };

  const handleFavorite = (card) => {
    dispatch(toggleFavorite(card.id));
  };

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding pages to your almanac!</p>
      <form>
        <input
          type="text"
          placeholder="Spirit Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Subtype"
          value={subType}
          onChange={(event) => setSubType(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Brand"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Spirit Proof"
          value={proof}
          onChange={(event) => setProof(event.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Tasting Notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Submit
        </button>
      </form>
      <div>Your Almanac:</div>
      <div>
        {cards.map((card) => {
          return (
          <body>
          <div>
            <h2>{card.name}</h2>
            <p>{`Spirit Type: ${card.type}`}</p>
            <p>{`Spirit Subtype: ${card.subType}`}</p>
            <p>{`Spirit Brand: ${card.brand}`}</p>
            <p>{`Spirit Proof: ${card.proof}`}</p>
            <p>{`Tasting Notes: ${card.notes}`}</p>
            <p>{`Favorite: ${card.favorite}`}</p>
          </div>
          <button onClick={() => handleRemove(card)}>Delete</button>
          <button onClick={() => handleFavorite(card)}>Favorite</button>
          </body>);
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
//<div> {JSON.stringify(card)} </div>