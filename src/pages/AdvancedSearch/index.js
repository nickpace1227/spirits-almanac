import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function AdvancedSearch() {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [subType, setSubType] = useState("");
  const [distillery, setDistillery] = useState("");
  const [proof, setProof] = useState("");
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState("");
  const cards = useSelector((store) => store.inventory.cards);

  return (
    <div>
      <div>Spirits Almanac Advanced Search</div>
      <form>
        <input 
          type="text"
          placeholder="Spirit Name" 
          onChange={(event) => setName(event.target.value)}
          />
          <br />
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
          placeholder="Spirit Distillery" 
          onChange={(event) => setDistillery(event.target.value)}
          />
          <br />
        <input 
          type="number"
          placeholder="Spirit Proof" 
          onChange={(event) => setProof(event.target.value)}
          />
          <br />
        <input
          type="text"
          placeholder="Tasting Notes" 
          onChange={(event) => setNotes(event.target.value)}
          />
          <br />
        <label>
        Limit Search to Favorites?
          <input
            type="checkbox" />
          <br />
        <select>
          <option value="empty">Select a Rating</option>
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
        </label>
      </form>
      <div>
        Search Results:
      </div>
      {cards.map((card) => {
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
