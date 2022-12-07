import React from "react";
import { useSelector } from "react-redux";

export default function AdvancedSearch() {

  const cards = useSelector((store) => store.inventory.cards);

  return (
    <div>
      <div>Spirits Almanac Advanced Search</div>
      <form>
        <input 
          type="text"
          placeholder="Spirit Name" />
          <br />
        <input
          type="text"
          placeholder="Spirit Type" />
          <br />
        <input 
         type="text"
         placeholder="Spirit Subtype" />
         <br />
        <input
          type="text"
          placeholder="Spirit Brand" />
          <br />
        <input 
          type="number"
          placeholder="Spirit Proof" />
          <br />
        <input
          type="text"
          placeholder="Tasting Notes" />
          <br />
        <label>
        Limit Search to Favorites?
          <input
            type="checkbox" />
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
              <p>{`Spirit Brand: ${card.brand}`}</p>
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
