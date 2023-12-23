import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard, toggleFavorite, editCard } from "../../store/cardSlice";
import {Wrapper} from "./styles.js";


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
  const [spiritId, setSpiritId] = useState("")
  const [editingSpirit, setEditingSpirit] = useState(false);

  useEffect(() => {
    handleAdvancedSearch();
  }, [cards]);

  const clearForm = () => {
    setType("");
    setSubType("");
    setDistillery("");
    setProof("");
    setName("");
    setNotes("");
    setRating("")
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card))
    handleAdvancedSearch();
  };

  const handleFavorite = (card) => {
    dispatch(toggleFavorite(card));
  };

  const handleEditCard = (card) => {
    setEditingSpirit(true);
    setName(card.name);
    setType(card.type);
    setSubType(card.subType);
    setDistillery(card.distillery);
    setProof(card.proof);
    setNotes(card.notes);
    setRating(card.rating);
    setSpiritId(card.id);
  };

  const handleAdvancedSearch = () => {
    let resultArray = cards;

  if(name !== ''){
      const lowerCaseName = name.toLowerCase();
      const newResult = resultArray.filter((bottle)=> bottle.name.toLowerCase().includes(lowerCaseName));
      resultArray = [...newResult]
  }
  if(type !== ''){
    const lowerCaseType = type.toLowerCase();
    const newResult = resultArray.filter((bottle)=> bottle.type.toLowerCase().includes(lowerCaseType));
    resultArray = [...newResult]
  }
  if(subType !== ''){
    const lowerCaseSubType = subType.toLowerCase();
    const newResult = resultArray.filter((bottle)=> bottle.subType.toLowerCase().includes(lowerCaseSubType));
    resultArray = [...newResult]
  }
  if(distillery !== ''){
    const lowerCaseDistillery = distillery.toLowerCase();
    const newResult = resultArray.filter((bottle)=> bottle.distillery.toLowerCase().includes(lowerCaseDistillery));
    resultArray = [...newResult]
  }
  if(proof !== ''){
    const newResult = resultArray.filter((bottle)=> bottle.proof.toLowerCase().includes(proof));
    resultArray = [...newResult]
  }
  if(notes !== ''){
    const lowerCaseNotes = notes.toLowerCase();
    const newResult = resultArray.filter((bottle)=> bottle.notes.toLowerCase().includes(lowerCaseNotes));
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

  const handleEdit = (card) => {
    const updatedCard = {
      name: name,
      type: type,
      subType: subType,
      distillery: distillery,
      proof: proof,
      notes: notes,
      favorite: card.favorite,
      id: spiritId,
      rating: rating,
    };
    if (name === "" || type === "") {
      return (alert("Please enter a name and type of spirit."))
    } else {
      dispatch(editCard(updatedCard));
      setEditingSpirit(false);
      clearForm();
  }
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
  <Wrapper>
    <div className="advanced-search">
      <h1>Spirits Almanac Advanced Search</h1>
      <h3>Use the options below to manage your almanac.</h3>
      <div>
      {editingSpirit === false && (
      <div>
      <h2>Advanced Search</h2>
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
      </div>)}
      </div>
      <div>
        {editingSpirit === true && (
          <div>
          <h3>Edit Your Spirit</h3>
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
              type="text"
              placeholder="Spirit Proof"
              value={proof}
              onChange={(e) => setProof(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Tasting Notes"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
            <br />
            <select value={rating} onChange={(event) => setRating(event.target.value)}>
              <option value="">Select a rating</option>
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
            <br />
            <button type="button" onClick={handleEdit}>
              Edit Card
            </button>
          </form>
          </div>
        )}
      </div>
      <div>
        Search Results:
      </div>
      {searchResults.map((card) => {
        return (
          <div>
            <div>
              <h2>{card.name}</h2>
              <p>{`Spirit Type: ${card.type}`}</p>
              <p>{`Spirit SubType: ${card.subType}`}</p>
              <p>{`Spirit Distillery: ${card.distillery}`}</p>
              <p>{`Spirit Proof: ${card.proof}`}</p>
              <p>{`Tasting Notes: ${card.notes}`}</p>
              <p>{`Rating: ${card.rating}`}</p>
            </div>
            <button type="button" onClick={() => handleRemove(card)}>Delete</button>
          <button type="button" onClick={() => handleFavorite(card)}>Favorite</button>
          <button type="button" onClick={() => handleEditCard(card)}>Edit</button>
          </div>
        )
      })}
    </div>
    </Wrapper>
  );
}
