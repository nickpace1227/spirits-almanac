import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCard, toggleFavorite, editCard } from "../../store/cardSlice";
import {Wrapper} from "./styles.js";


export default function AdvancedSearch() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const [type, setType] = useState("");
  const [validType, setValidType] = useState(true);
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
  const [validCard, setValidCard] = useState(true);

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

    const editErrorCheck = {
      errorCheckName: validName,
      errorCheckType: validType,
      errorCheckCard: validCard,
    }

    if (name === "") {
      editErrorCheck.errorCheckName = false;
      editErrorCheck.errorCheckCard = false;
      setValidName(false);
    } 
    
    if (type === "") {
      editErrorCheck.errorCheckType = false;
      editErrorCheck.errorCheckCard = false;
      setValidType(false);
    }

    if (!editErrorCheck.errorCheckName || !editErrorCheck.errorCheckName || !editErrorCheck.errorCheckCard) {
      setEditingSpirit(true)
    }

    if (name !== "" && type !== "") {
      editErrorCheck.errorCheckCard = true;
      setValidCard(true);
    }

    if (editErrorCheck.errorCheckCard) {
      dispatch(editCard(updatedCard));
      clearForm();
      setValidName(true);
      setValidType(true);
      setEditingSpirit(false);
    }
};

  return (
  <Wrapper>
    <div className="main-div">
      <h1 className="advanced-search-intro">Spirits Almanac Advanced Search</h1>
      <h3 className="advanced-search-intro">Use the options below to manage your almanac.</h3>

      {/* Begin Spirits Management */}

      {editingSpirit ? 
        
        //Begin Edit Card
        <div className="advanced-search">
      <h3>Edit Your Spirit</h3>
      <form className="edit-spirits">
        <div className="inputs">
        <input
          className={validName ? "valid-input" : "invalid-input"}
          type="text"
          placeholder="Spirit Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className={validType ? "valid-input" : "invalid-input"}
          type="text"
          placeholder="Spirit Type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
        <input
          className="valid-input"
          type="text"
          placeholder="Spirit Subtype"
          value={subType}
          onChange={(event) => setSubType(event.target.value)}
        />
        <input
          className="valid-input"
          type="text"
          placeholder="Spirit Distillery"
          value={distillery}
          onChange={(event) => setDistillery(event.target.value)}
        />
        <input
          className="valid-input"
          type="text"
          placeholder="Spirit Proof"
          value={proof}
          onChange={(e) => setProof(e.target.value)}
        />
        <input
          className="valid-input"
          type="text"
          placeholder="Tasting Notes"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
        <select value={rating} onChange={(event) => setRating(event.target.value)} className="valid-input">
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
        <button className="button" type="button" onClick={handleEdit}>
          Save
        </button>
        </div>
      </form>
      </div>
      //End Edit Card

      :

      // Begin Advanced Search
      <div className="advanced-search">
      <h2 >Advanced Search</h2>
      <form className="advanced-search">
        <div className="inputs">
        <input 
          className="valid-input"
          type="text"
          placeholder="Spirit Name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
        <input
          className="valid-input"
          type="text"
          placeholder="Spirit Type"
          value={type}
          onChange={(event) => setType(event.target.value)} 
          />
        <input 
          className="valid-input"
          type="text"
          placeholder="Spirit Subtype" 
          value={subType}
          onChange={(event) => setSubType(event.target.value)}
         />
        <input
          className="valid-input"
          type="text"
          placeholder="Spirit Distillery" 
          value={distillery}
          onChange={(event) => setDistillery(event.target.value)}
          />
        <input 
          className="valid-input"
          type="text"
          placeholder="Spirit Proof" 
          value={proof}
          onChange={(event) => setProof(event.target.value)}
          />
        <input
          className="valid-input"
          type="text"
          placeholder="Tasting Notes" 
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          />
        <div>
        Limit Search to Favorites?
          <input
            type="checkbox" 
            onChange={() => setFavorite(!favorite)}/>
        </div>
        <select value={rating} onChange={(event) => setRating(event.target.value)} className="valid-input">
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
        </div>
      </form>
      <div>
      <button className="button" type="button" onClick={handleAdvancedSearch} >Search</button>
      <button className="button" type="button" onClick={clearForm}>Clear</button>
      </div>
      </div>
      // End Advanced Search
      }

      {/* End Spirits Management */}

      {/* Search Results    */}
      <h1 className="search-results">
        Search Results:
      </h1>
      <div className="user-search">
      {searchResults.map((card) => {
        return (
          <div className="search-item">
            <div className="search-item-layout">
              <h2 className="card-name">{card.name}</h2>
              <p>{`Spirit Type: ${card.type}`}</p>
              <p>{`Spirit SubType: ${card.subType}`}</p>
              <p>{`Spirit Distillery: ${card.distillery}`}</p>
              <p>{`Spirit Proof: ${card.proof}`}</p>
              <p>{`Tasting Notes: ${card.notes}`}</p>
              <p>{`Rating: ${card.rating}`}</p>
            </div>
        <div>
          <button className="card-button" type="button" onClick={() => handleRemove(card)}>Delete</button>
          <button className="card-button" type="button" onClick={() => handleFavorite(card)}>Favorite</button>
          <button className="card-button" type="button" onClick={() => handleEditCard(card)}>Edit</button>
        </div>
          </div>
        )
      })}
    </div>
    </div>
    </Wrapper>
  );
}
