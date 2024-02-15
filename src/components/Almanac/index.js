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
import EditingModal from "../EditingModal";

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
  const [spiritId, setSpiritId] = useState("");
  const cards = useSelector((store) => store.inventory.cards);
  const [modalActive, setModalActive] = useState(false);
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
      spiritId: uuidv4(),
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
    console.log(cards);
    clearForm();
    setValidName(true);
    setValidType(true);
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
    setFavorite(card.favorite);
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
    };
    dispatch(editCard(editedCard));
    setModalActive(false);
    clearForm();
  };

  const handleRemove = (card) => {
    dispatch(removeCard(card));
  };

  const handleFavorite = (card) => {
    dispatch(toggleFavorite(card));
  };

  const handleCancel = () => {
    clearForm();
    setModalActive(false);
  };

  return (
    <Wrapper className={modalActive ? "active-modal" : ""}>
      <div className="main-div">
        <div className="almanac-intro">
          <h1>Welcome to your own Spirits Almanac!</h1>
          <div className="almanac-description">
            Click below to begin adding pages to your almanac or use our{" "}
            <Link to="/advancedsearch">Find-a-Spirit</Link> search tool to look
            through your saved spirits!
          </div>
        </div>

        {/* Spirit Management */}

        {/* Edit Spirits */}

        {modalActive && (
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
        )}

        {/* End Edit */}

        {/* Add a spirit */}

        <div className="almanac-manager">
          <h3 className="section-title">Add a Spirit</h3>
          <form className="manage-spirits">
            <div className="inputs">
              <input
                className={validName ? "valid-input" : "invalid-input"}
                type="text"
                placeholder="Spirit Name"
                value={modalActive ? "" : name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className={validType ? "valid-input" : "invalid-input"}
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
                onChange={(e) => setProof(e.target.value)}
              />
              <input
                className="valid-input"
                type="text"
                placeholder="Tasting Notes"
                value={modalActive ? "" : notes}
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
                value={modalActive ? "" : rating}
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
        <div className={"user-almanac"}>
          {cards.length === 0 ? (
            <div className="empty-almanac">
              Begin adding to your almanac today!
            </div>
          ) : (
            cards.map((card) => {
              return (
                <div className="almanac-item" key={card.spiritId}>
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
            })
          )}
        </div>
      </div>
    </Wrapper>
  );
}
