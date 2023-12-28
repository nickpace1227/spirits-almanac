import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, toggleFavorite, editCard } from "../../store/cardSlice";
import {v4 as uuidv4} from "uuid";
import { Link } from "react-router-dom";
import {Wrapper} from "./styles.js";

export default function Almanac() {
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
  const [searchTerm, setSearchTerm] = useState("");
  const [validSearch, setValidSearch] = useState(true);
  const [dropdown, setDropdown] = useState("name");
  const [filteredCards, setFilteredCards] = useState([]);
  const [spiritId, setSpiritId] = useState("")
  const cards = useSelector((store) => store.inventory.cards);
  const [editingSpirit, setEditingSpirit] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [validCard, setValidCard] = useState(true);
  
  const clearForm = () => {
    setType("");
    setSubType("");
    setDistillery("");
    setProof("");
    setName("");
    setNotes("");
    setRating("")
  };

  const handleAdd = () => {
    const newCard = {
      name: name,
      type: type,
      subType: subType,
      distillery: distillery,
      proof: proof,
      notes: notes,
      favorite: false,
      id: uuidv4(),
      rating: rating,
    };

    const addErrorCheck = {
      errorCheckName: validName,
      errorCheckType: validType,
      errorCheckCard: validCard,
    }

    if (name === "") {
      addErrorCheck.errorCheckCard = false;
      setValidName(false);
    } 
    
    if (type === "") {
      addErrorCheck.errorCheckCard = false;
      setValidType(false);
    }

    if (name !== "" && type !== "") {
      addErrorCheck.errorCheckCard = true;
      setValidCard(true);
    }
    
    if (addErrorCheck.errorCheckCard) {
      dispatch(addCard(newCard));
      clearForm();
      setValidName(true);
      setValidType(true);
    }
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card))
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

  const searchCards = (card) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (card[dropdown].toLowerCase().includes(lowerCaseSearch)) {
      return card
  };
};

  const handleSearch = () => {
    const errorCheck = {
      validSearchTerm: validSearch
    }

      if (searchTerm === "") {
      errorCheck.validSearchTerm = false;
      setValidSearch(false);
      return;
    } 
    
    if (searchTerm !== "") {
      errorCheck.validSearchTerm = true;
      setValidSearch(true)
      const newFilteredCards = cards.filter(searchCards);
      setFilteredCards(cards.filter(searchCards));
      if (newFilteredCards.length === 0) {
        setNoResults(true)
      }
      if (newFilteredCards.length > 0) {
        setNoResults(false)
      }
    }
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
      <h1 className="almanac-intro">Welcome to your own Spirits Almanac!</h1>
      <p className="almanac-intro">Click below to begin adding pages to your almanac or use our search tool to look through your saved spirits!</p>

      {/* Search stuff */}
      <div className="search-section">
        <div className="search-bar">
          <select onChange={(event) => setDropdown(event.target.value)}>
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="subType">Sub Type</option>
            <option value="distillery">Distillery</option>
          </select>
          <input
            className={validSearch ? "valid-search-input" : "invalid-search-input"}
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value)
              setValidSearch(true)}}
          />
          <button className="button" type="button" onClick={() => handleSearch()}>Search</button>
          </div>
          <Link className="advanced-search" to="/advancedsearch">Advanced Search</Link>
      </div>
        { noResults ? <div className="no-results">No Results Found</div> : <div className="search-results">
        <p>{filteredCards.map((card) => {
          return (
          <div>
          <div>
            <h2>{card.name}</h2>
            <p>{`Spirit Type: ${card.type}`}</p>
            <p>{`Spirit Subtype: ${card.subType}`}</p>
            <p>{`Spirit Distillery: ${card.distillery}`}</p>
            <p>{`Spirit Proof: ${card.proof}`}</p>
            <p>{`Tasting Notes: ${card.notes}`}</p>
            <p>{`Rating: ${card.rating}`}</p>
          </div>
          <button type="button" onClick={() => handleRemove(card)}>Delete</button>
          <button type="button" onClick={() => handleFavorite(card)}>Favorite</button>
          <button type="button" onClick={() => handleEditCard(card)}>Edit</button>
          </div>);
        })}</p>
        </div>}
        {/* End Search */}

        {/* Spirit Management */}
      {editingSpirit ? 

      //Edit a Spirit
      <div className="almanac-manager">
      <h3>Edit Your Spirit</h3>
      <form className="manage-spirits">
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
        </div>
        <button 
        className="button"
        type="button" 
        onClick={handleEdit}>
          Save
        </button>
        
      </form>
      </div>
      //End Edit

      :

      // Add a spirit
  <div className="almanac-manager">
    <h3>Add a Spirit</h3>
    <form className="manage-spirits">
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
        </div>
        <button type="button" className="button" onClick={handleAdd}>
          Add Card
        </button>
      </form>
    </div>}
    {/* End Spirits Management */}

    {/* Begin Almanac */}
        <h1 className="almanac-title">Your Almanac</h1>
        <div className="user-almanac">
        {cards.map((card) => {
          return (
          <div className="almanac-item">
          <div className="almanac-item-layout">
            <h2 className="card-name">{card.name}</h2>
            <p>{`Spirit Type: ${card.type}`}</p>
            <p>{`Spirit Subtype: ${card.subType}`}</p>
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
          </div>);
        })}
      </div>
      </div>
    </Wrapper>
  );
}