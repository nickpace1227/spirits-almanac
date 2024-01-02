import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCard,
  removeCard,
  toggleFavorite,
  editCard,
} from "../../store/cardSlice";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { Wrapper } from "./styles.js";

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
  const [spiritId, setSpiritId] = useState("");
  const cards = useSelector((store) => store.inventory.cards);
  // if this is going to be true or false then I'd change it to modalActive
  const [modalState, setModalState] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const clearForm = () => {
    setType("");
    setSubType("");
    setDistillery("");
    setProof("");
    setName("");
    setNotes("");
    setRating("");
    setFavorite(false);
  };

  const handleAdd = () => {
    const newCard = {
      name: name,
      type: type,
      subType: subType,
      distillery: distillery,
      proof: proof,
      notes: notes,
      favorite: favorite,
      id: uuidv4(),
      rating: rating,
    };

    const addErrorCheck = {
      validName: validName,
      validType: validType,
    };

    if (name === "") {
      addErrorCheck.validName = false;
      setValidName(false);
    }

    if (type === "") {
      addErrorCheck.validType = false;
      setValidType(false);
    }

    if (!addErrorCheck.validName || !addErrorCheck.validType) {
      return;
    }

    dispatch(addCard(newCard));
    clearForm();
    setValidName(true);
    setValidType(true);
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card));
  };

  const handleFavorite = (card) => {
    dispatch(toggleFavorite(card));
  };

  const searchCards = (card) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (card[dropdown].toLowerCase().includes(lowerCaseSearch)) {
      return card;
    }
  };

  const handleSearch = () => {
    if (searchTerm === "") {
      setValidSearch(false);
      return;
    }

    if (searchTerm !== "") {
      setValidSearch(true);
      setFilteredCards(cards.filter(searchCards));
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
      validName,
      validType,
    };

    if (name === "") {
      editErrorCheck.validName = false;
      setValidName(false);
    }

    if (type === "") {
      editErrorCheck.validType = false;
      setValidType(false);
    }

    // this code didnt do anything. now it shortcuts to exit
    if (!editErrorCheck.validName || !editErrorCheck.validType) {
      return;
    }

    dispatch(editCard(updatedCard));
    clearForm();
    setValidName(true);
    setValidType(true);
    setModalState(false);
  };

  const handleEditCard = (card) => {
    setModalState(true);
    setName(card.name);
    setType(card.type);
    setSubType(card.subType);
    setDistillery(card.distillery);
    setProof(card.proof);
    setNotes(card.notes);
    setRating(card.rating);
    setSpiritId(card.id);
    setFavorite(card.favorite);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredCards([]);
  };

  const handleCancel = () => {
    clearForm();
    setModalState(false);
  };

  return (
    <Wrapper>
      <div className="main-div">
        <h1 className="almanac-intro">Welcome to your own Spirits Almanac!</h1>
        <p className="almanac-intro">
          Click below to begin adding pages to your almanac or use our search
          tool to look through your saved spirits!
        </p>

        {/* Search stuff */}
        {/* XXXXXXXX since you have advanced search I'd remove search on the main almanac page */}
        <div className="search-section">
          <div className="search-bar">
            <select onChange={(event) => setDropdown(event.target.value)}>
              <option value="name">Name</option>
              <option value="type">Type</option>
              <option value="subType">Sub Type</option>
              <option value="distillery">Distillery</option>
            </select>
            <input
              className={validSearch ? "valid-input" : "invalid-input"}
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setValidSearch(true);
              }}
            />
            <button
              className="button"
              type="button"
              onClick={(e) => handleSearch(e)}
            >
              Search
            </button>
            <button
              className="button"
              type="button"
              onClick={(e) => handleClearSearch(e)}
            >
              Clear
            </button>
          </div>
          {/* XXXXX if you remove search stuff from this page change this below to "find a Spirit" */}
          <Link className="advanced-search" to="/advancedsearch">
            Advanced Search
          </Link>
        </div>
        <div className="search-results">
          <div className="results-section">
            {filteredCards.map((card) => {
              return (
                <div className="almanac-item" key={card.id}>
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
                    <button
                      className="favorite-button"
                      type="button"
                      onClick={() => handleFavorite(card)}
                    >
                      {card.favorite ? <>&#9733;</> : <>&#9734;</>}
                    </button>
                    <button
                      className="card-button"
                      type="button"
                      onClick={() => handleRemove(card)}
                    >
                      Delete
                    </button>
                    <button
                      className="card-button"
                      type="button"
                      onClick={() => handleEditCard(card)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* End Search */}

        {/* Spirit Management */}
        {/* Edit Spirits */}
        {modalState && (
          <div className="editing-modal">
            <div className="spirit-modal">
              <h3>Edit Your Spirit</h3>
              {/* XXXXXX this modal needs organization. suggest making it a column also each of the inputs needs padding */}
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
                  <select
                    value={rating}
                    onChange={(event) => setRating(event.target.value)}
                    className="valid-input"
                  >
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
                <div>
                  <button className="button" type="button" onClick={handleEdit}>
                    Save
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* End Edit */}

        {/* Add a spirit */}

        <div className="almanac-manager">
          <h3>Add a Spirit</h3>
          <form className="manage-spirits">
            <div className="inputs">
              <input
                className={validName ? "valid-input" : "invalid-input"}
                type="text"
                placeholder="Spirit Name"
                value={modalState ? "" : name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className={validType ? "valid-input" : "invalid-input"}
                type="text"
                placeholder="Spirit Type"
                value={modalState ? "" : type}
                onChange={(event) => setType(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Subtype"
                value={modalState ? "" : subType}
                onChange={(event) => setSubType(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Distillery"
                value={modalState ? "" : distillery}
                onChange={(event) => setDistillery(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Proof"
                value={modalState ? "" : proof}
                onChange={(e) => setProof(e.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Tasting Notes"
                value={modalState ? "" : notes}
                onChange={(event) => setNotes(event.target.value)}
              />
              <div>
                Add Spirit to Favorites?
                <input
                  className="favorite-selector"
                  type="checkbox"
                  checked={favorite}
                  onChange={() => setFavorite(!favorite)}
                />
              </div>
              <select
                value={modalState ? "" : rating}
                onChange={(event) => setRating(event.target.value)}
                className="valid-input"
              >
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
            <div>
              <button type="button" className="button" onClick={handleAdd}>
                Add Card
              </button>
              <button type="button" className="button" onClick={handleCancel}>
                Clear
              </button>
            </div>
          </form>
        </div>
        {/* End Spirits Management */}

        {/* Begin Almanac */}
        <h1 className="almanac-title">Your Almanac</h1>
        <div className="user-almanac">
          {cards.map((card) => {
            return (
              <div className="almanac-item" key={card.id}>
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
                  <button
                    className="favorite-button"
                    type="button"
                    onClick={() => handleFavorite(card)}
                  >
                    {card.favorite ? <>&#9733;</> : <>&#9734;</>}
                  </button>
                  <button
                    className="card-button"
                    type="button"
                    onClick={() => handleRemove(card)}
                  >
                    Delete
                  </button>
                  <button
                    className="card-button"
                    type="button"
                    onClick={(event) => handleEditCard(card, event)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}
