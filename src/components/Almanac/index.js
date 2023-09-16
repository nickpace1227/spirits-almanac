import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, toggleFavorite, editCard } from "../../store/cardSlice";
import {v4 as uuidv4} from "uuid";
import { Link } from "react-router-dom";

export default function Almanac() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [distillery, setDistillery] = useState("");
  const [proof, setProof] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdown, setDropdown] = useState("name");
  const [filteredCards, setFilteredCards] = useState([]);
  const [spiritId, setSpiritId] = useState("")
  const cards = useSelector((store) => store.inventory.cards);
  const [editingSpirit, setEditingSpirit] = useState(false);
  
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
      if (searchTerm === "") {
      return alert("Please enter a search term")
    } else {
      const newFilteredCards = cards.filter(searchCards);
      setFilteredCards(cards.filter(searchCards));
      if (newFilteredCards.length === 0) {
        return alert("No Results");
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
    if (name === "" || type === "") {
      return (alert("Please enter a name and type of spirit."))
    } else {
      dispatch(editCard(updatedCard));
      setEditingSpirit(false);
      clearForm();
  }
};

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
      <p>Click below to begin adding pages to your almanac or use our search tool to look through your saved spirits!</p>
        <form>
          <select onChange={(event) => setDropdown(event.target.value)}>
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="subType">Sub Type</option>
            <option value="distillery">Distillery</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="button" onClick={() => handleSearch()}>Search</button>
          <div>
          <Link to="/advancedsearch">Advanced Search</Link>
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
      </div>
        </form>
      <div>
      {editingSpirit === false && (
      <div>
      <h3>Add a Spirit</h3>
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
        <button type="button" onClick={handleAdd}>
          Add Card
        </button>
      </form>
      </div>)}
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
      </div>)}
      </div>
      <div>
        <div>Your Almanac:</div>
        {cards.map((card) => {
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
        })}
      </div>
    </div>
  );
}