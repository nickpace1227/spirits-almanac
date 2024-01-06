import React, { useState } from "react";

export default function EditingModal(props) {
    const [name, setName] = useState(props.name);
    const [validName, setValidName] = useState(true);
    const [type, setType] = useState(props.type);
    const [validType, setValidType] = useState(true);
    const [subType, setSubType] = useState(props.subType);
    const [distillery, setDistillery] = useState(props.distillery);
    const [proof, setProof] = useState(props.proof);
    const [notes, setNotes] = useState(props.notes);
    const [rating, setRating] = useState(props.rating);

        const updatedCard = {
          name: name,
          type: type,
          subType: subType,
          distillery: distillery,
          proof: proof,
          notes: notes,
          favorite: props.favorite,
          spiritId: props.spiritId,
          rating: rating,
        };

    const editErrorCheck = () => {
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
        
          if (!editErrorCheck.validName || !editErrorCheck.validType) {
            return;
          }

          if (editErrorCheck.validName && editErrorCheck.validType) {
            props.onEdit(updatedCard);
          }
    }


    return (    
    <div className="editing-modal">
            <div className="spirit-modal">
              <h3 className="edit-section-title">Edit Your Spirit</h3>
              <form className="edit-spirits">
                <div className="inputs">
                  <input
                    className={validName ? "valid-input" : "invalid-input"}
                    type="text"
                    placeholder="Spirit Name"
                    value={name}
                    onChange={(event) => {
                        setValidName(true);
                        setName(event.target.value)}}
                  />
                  <input
                    className={validType ? "valid-input" : "invalid-input"}
                    type="text"
                    placeholder="Spirit Type"
                    value={type}
                    onChange={(event) => {
                        setValidType(true);
                        setType(event.target.value)}}
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
                  <button className="button" type="button" onClick={editErrorCheck}>
                    Save
                  </button>
                  <button
                    className="button"
                    type="button"
                    onClick={props.onCancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
    )
}