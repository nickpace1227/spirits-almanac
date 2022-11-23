import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPage, removePage, toggleFavorite } from "../../store/pageSlice";
import {v4 as uuidv4} from "uuid";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [brand, setBrand] = useState("");
  const [proof, setProof] = useState("");
  const [notes, setNotes] = useState("");
  const pages = useSelector((store) => store.inventory.pages);
  
  const clearForm = () => {
    setType("");
    setSubType("");
    setBrand("");
    setProof("");
    setName("");
    setNotes("");
  };

  const handleClick = () => {
    const newPage = {
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
      dispatch(addPage(newPage));
      clearForm();
    }
  };

  const handleRemove = (page) => {
    dispatch(removePage(page))
  };

  const handleFavorite = (page) => {
    dispatch(toggleFavorite(page.id));
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
        {pages.map((page) => {
          return (
          <body>
          <div>
            <h2>{page.name}</h2>
            <p>{`Spirit Type: ${page.type}`}</p>
            <p>{`Spirit Subtype: ${page.subType}`}</p>
            <p>{`Spirit Brand: ${page.brand}`}</p>
            <p>{`Spirit Proof: ${page.proof}`}</p>
            <p>{`Tasting Notes: ${page.notes}`}</p>
          </div>
          <button onClick={()=> handleRemove(page)}>Delete Page</button>
          <button onClick={handleFavorite(page)}>Favorite</button>
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