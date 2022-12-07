import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard, removeCard, toggleFavorite } from "../../store/cardSlice";
import {v4 as uuidv4} from "uuid";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [brand, setBrand] = useState("");
  const [proof, setProof] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdown, setDropdown] = useState("name");
  const [filteredCards, setFilteredCards] = useState([]);
  const cards = useSelector((store) => store.inventory.cards);
  
  const clearForm = () => {
    setType("");
    setSubType("");
    setBrand("");
    setProof("");
    setName("");
    setNotes("");
    setRating("")
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
    dispatch(toggleFavorite(card.id));
  };



  const searchCards = (card) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    if (dropdown === "name" && card.name.toLowerCase().includes(lowerCaseSearch)) {
      return card
    } else if (dropdown === "type" && card.type.toLowerCase().includes(lowerCaseSearch)) {
      return card
    } else if (dropdown === "subType" && card.subType.toLowerCase().includes(lowerCaseSearch)) {
      return card
    } else if (dropdown === "brand" && card.brand.toLowerCase().includes(lowerCaseSearch)) {
      return card
    } 
  };

  const handleSearch = () => {
      if (searchTerm === "") {
      return alert("Please enter a search term")
    } else {
      setFilteredCards(cards.filter(searchCards));
    }
    if (filteredCards.length === 0) {
        return alert("No Results")
      }
    };

  return (
    <div className="App">
      <p>Welcome to Spirits Almanac!</p>
        <form>
          <select onChange={(event) => setDropdown(event.target.value)}>
            {/* <option value="all">All</option> */}
            <option value="name">Name</option>
            <option value="type">Type</option>
            <option value="subType">Sub Type</option>
            <option value="brand">Brand</option>
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
        <p>Search Result</p>
        <p>{filteredCards.map((card) => {
          return (
          <body>
          <div>
            <h2>{card.name}</h2>
            <p>{`Spirit Type: ${card.type}`}</p>
            <p>{`Spirit Subtype: ${card.subType}`}</p>
            <p>{`Spirit Brand: ${card.brand}`}</p>
            <p>{`Spirit Proof: ${card.proof}`}</p>
            <p>{`Tasting Notes: ${card.notes}`}</p>
            <p>{`Rating: ${card.rating}`}</p>
          </div>
          </body>);
        })}</p>
      </div>
        </form>
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
        <select onChange={(event) => setRating(event.target.value)}>
          <option value="empty">Select a rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <button type="button" onClick={handleClick}>
          Add Card
        </button>
      </form>
      <div>
        <div>Your Almanac:</div>
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
            <p>{`Rating: ${card.rating}`}</p>
          </div>
          <button onClick={() => handleRemove(card)}>Delete</button>
          <button onClick={() => handleFavorite(card)}>Favorite</button>
          </body>);
        })}
      </div>
    </div>
  );
}