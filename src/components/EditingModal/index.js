import React, { useState } from "react";

export default function EditingModal(props, {editingCallback}) {
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(true);
    const [type, setType] = useState("");
    const [validType, setValidType] = useState(true);
    const [subType, setSubType] = useState("");
    const [distillery, setDistillery] = useState("");
    const [proof, setProof] = useState("");
    const [notes, setNotes] = useState("");
    const [rating, setRating] = useState("");
    const [modalActive, setModalActive] = useState(false);

        const updatedCard = {
          name: "butt",
          type: type,
          subType: subType,
          distillery: distillery,
          proof: proof,
          notes: notes,
          rating: rating,
          validName: validName,
          validType: validType,
          modalActive: modalActive,
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
            setValidName(true);
            setValidType(true);
            setModalActive(false);
          }
    }

    const handleCancel = () => {
        setModalActive(false)
        editingCallback(modalActive)
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
                    value={props.name}
                    onChange={(event) => {
                        setValidName(true);
                        setName(event.target.value)}}
                  />
                  <input
                    className={validType ? "valid-input" : "invalid-input"}
                    type="text"
                    placeholder="Spirit Type"
                    value={props.type}
                    onChange={(event) => {
                        setValidType(true);
                        setType(event.target.value)}}
                  />
                  <input
                    className="valid-input"
                    type="text"
                    placeholder="Spirit Subtype"
                    value={props.subType}
                    onChange={(event) => setSubType(event.target.value)}
                  />
                  <input
                    className="valid-input"
                    type="text"
                    placeholder="Spirit Distillery"
                    value={props.distillery}
                    onChange={(event) => setDistillery(event.target.value)}
                  />
                  <input
                    className="valid-input"
                    type="text"
                    placeholder="Spirit Proof"
                    value={props.proof}
                    onChange={(e) => setProof(e.target.value)}
                  />
                  <input
                    className="valid-input"
                    type="text"
                    placeholder="Tasting Notes"
                    value={props.notes}
                    onChange={(event) => setNotes(event.target.value)}
                  />
                  <select
                    value={props.rating}
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
                  <button className="button" type="button" onClick={() => editingCallback(updatedCard)}>
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
    )
}