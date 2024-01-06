import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCard, toggleFavorite, editCard } from "../../store/cardSlice";
import { Wrapper } from "./styles.js";
import EditingModal from "../EditingModal";

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
  const [spiritId, setSpiritId] = useState("");
  const [modalActive, setModalActive] = useState(false);
  

  const clearForm = () => {
    setType("");
    setSubType("");
    setDistillery("");
    setProof("");
    setName("");
    setNotes("");
    setRating("");
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card));
  };

  const handleFavorite = (card) => {
    dispatch(toggleFavorite(card));
  };

  const handleEditCard = (card) => {
    setModalActive(true);
    setName(card.name);
    setType(card.type);
    setSubType(card.subType);
    setDistillery(card.distillery);
    setProof(card.proof);
    setNotes(card.notes);
    setRating(card.rating);
    setSpiritId(card.spiritId);
  };

  const handleEdit = (updatedCard) => {
    const editedCard = {
      name: updatedCard.name,
      type: updatedCard.type,
      subType: updatedCard.subType,
      distillery: updatedCard.distillery,
      proof: updatedCard.proof,
      notes: updatedCard.notes,
      favorite: updatedCard.favorite,
      spiritId: updatedCard.spiritId,
      rating: updatedCard.rating,
    }
    dispatch(editCard(editedCard));
    setModalActive(false);
    clearForm();
  };

  const handleCancel = () => {
    clearForm();
    setModalActive(false);
  };


    let resultArray = cards;

  if (name !== "") {
    const lowerCaseName = name.toLowerCase();
    const newResult = resultArray.filter((bottle) =>
      bottle.name.toLowerCase().includes(lowerCaseName)
    );
    resultArray = [...newResult];
  }
  if (type !== "") {
    const lowerCaseType = type.toLowerCase();
    const newResult = resultArray.filter((bottle) =>
      bottle.type.toLowerCase().includes(lowerCaseType)
    );
    resultArray = [...newResult];
  }
  if (subType !== "") {
    const lowerCaseSubType = subType.toLowerCase();
    const newResult = resultArray.filter((bottle) =>
      bottle.subType.toLowerCase().includes(lowerCaseSubType)
    );
    resultArray = [...newResult];
  }
  if (distillery !== "") {
    const lowerCaseDistillery = distillery.toLowerCase();
    const newResult = resultArray.filter((bottle) =>
      bottle.distillery.toLowerCase().includes(lowerCaseDistillery)
    );
    resultArray = [...newResult];
  }
  if (proof !== "") {
    const newResult = resultArray.filter((bottle) =>
      bottle.proof.toLowerCase().includes(proof)
    );
    resultArray = [...newResult];
  }
  if (notes !== "") {
    const lowerCaseNotes = notes.toLowerCase();
    const newResult = resultArray.filter((bottle) =>
      bottle.notes.toLowerCase().includes(lowerCaseNotes)
    );
    resultArray = [...newResult];
  }
  if (rating !== "") {
    const newResult = resultArray.filter((bottle) => bottle.rating === rating);
    resultArray = [...newResult];
  }
  if (favorite !== false) {
    const newResult = resultArray.filter((bottle) => bottle.favorite === true);
    resultArray = [...newResult];
  }

  return (
    <Wrapper>
      <div className="main-div">
        <h1 className="advanced-search-intro">Search for a Spirit</h1>

        {/* Begin Spirits Management */}

        {/* Begin Edit Card */}
        {modalActive && 
          <EditingModal 
            onEdit={handleEdit}
            onCancel={handleCancel}
            name={name}
            type={type}
            subType={subType}
            distillery={distillery}
            proof={proof}
            notes={notes}
            favorite={favorite}
            spiritId={spiritId}
            rating={rating}
          />  
        }

        {/* End Edit Card */}

        {/* Begin Advanced Search */}
        <div className="advanced-search">
          <h2>Advanced Search</h2>
          <form>
            <div className="inputs">
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Name"
                value={modalActive ? "" : name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Type"
                value={modalActive ? "" : type}
                onChange={(event) => setType(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Subtype"
                value={modalActive ? "" : subType}
                onChange={(event) => setSubType(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Distillery"
                value={modalActive ? "" : distillery}
                onChange={(event) => setDistillery(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Spirit Proof"
                value={modalActive ? "" : proof}
                onChange={(event) => setProof(event.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Tasting Notes"
                value={modalActive ? "" : notes}
                onChange={(event) => setNotes(event.target.value)}
              />
              <div>
                Limit Search to Favorites?
                <input
                  className="favorite-selector"
                  type="checkbox"
                  onChange={() => setFavorite(!favorite)}
                />
              </div>
              <select
                value={modalActive ? "" : rating}
                onChange={(event) => setRating(event.target.value)}
                className="valid-input"
              >
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
            <button 
            className="button" 
            type="button" 
            onClick={clearForm}>
              Clear
            </button>
          </div>
          <Link className="almanac-return" to="/Almanac">Return to Almanac</Link>
        </div>
        {/* End Advanced Search */}

        {/* End Spirits Management */}

        {/* Search Results    */}

    <h1 className="search-results">Search Results</h1>
        <div className="user-search">
          {resultArray.map((card) => {
            return (
              <div key={card.spiritId} className="search-item">
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
                  <button
                    className="favorite-button"
                    type="button"
                    onClick={() => handleFavorite(card)}
                  >
                    {card.favorite ? <>&#9733;</> : <>&#9734;</>}
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={() => handleRemove(card)}
                  >
                    Delete
                  </button>
                  <button
                    className="button"
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
      </Wrapper>
  );
}
