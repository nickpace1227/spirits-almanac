import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard, toggleFavorite } from "../../store/cardSlice";

export default function AdvancedSearch() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [distillery, setDistillery] = useState("");
  const [proof, setProof] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");
  const [favorite, setFavorite] = useState(false);
  const cards = useSelector((store) => store.inventory.cards);
  const [searchResults, setSearchResults] = useState(cards);


  const handleAdvancedSearch = () => {
    let resultArray = cards;

  if(name !== ''){
      const newResult = resultArray.filter((bottle)=> bottle.name.includes(name));
      resultArray = [...newResult]
  }
  if(type !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.type.includes(type));
    resultArray = [...newResult]
  }
  if(subType !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.subType.includes(subType));
    resultArray = [...newResult]
  }
  if(distillery !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.distillery.includes(distillery));
    resultArray = [...newResult]
  }
  if(proof !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.proof.includes(proof));
    resultArray = [...newResult]
  }
  if(notes !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.notes.includes(notes));
    resultArray = [...newResult]
  }
  if(rating !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.rating === rating);
    resultArray = [...newResult]
  }
  if(favorite !== false){
    const newResult = resultArray.filter((bottle) => bottle.favorite === true)
    resultArray = [...newResult]
  }

  setSearchResults(resultArray)
  };

  const handleClearForm = () => {
    setName("")
    setType("")
    setSubType("")
    setDistillery("")
    setProof("")
    setNotes("")
    setRating("")
    setFavorite(false)
    setSearchResults(cards)
  }

  return (
    <div>
      <h1>Spirits Almanac Advanced Search</h1>
      <div>Select from the below options to narrow down what bottle you're looking for.</div>
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
          placeholder="Spirit Distillery" 
          value={distillery}
          onChange={(event) => setDistillery(event.target.value)}
          />
          <br />
        <input 
          type="number"
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
        <label>
        Limit Search to Favorites?
          <input
            type="checkbox" 
            onChange={() => setFavorite(!favorite)}/>
          <br />
        </label>
        <select value={rating} onChange={(event) => setRating(event.target.value)} >
          <option value="">Select a Rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </form>
      <button type="button" onClick={handleAdvancedSearch} >Search</button>
      <button type="button" onClick={handleClearForm}>Clear Form</button>
      <div>
        Search Results:
      </div>
      {searchResults.map((card) => {
        return (
          <body>
            <div>
              <h2>{card.name}</h2>
              <p>{`Spirit Type: ${card.type}`}</p>
              <p>{`Spirit SubType: ${card.subType}`}</p>
              <p>{`Spirit Distillery: ${card.distillery}`}</p>
              <p>{`Spirit Proof: ${card.proof}`}</p>
              <p>{`Tasting Notes: ${card.notes}`}</p>
              <p>{`Rating: ${card.rating}`}</p>
            </div>
          </body>
        )
      })}
    </div>
  );
}
