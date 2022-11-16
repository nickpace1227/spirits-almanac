import React from "react";
import store from "../../store/cardSlice";

export default function Inventory() {
  return (
    <div>
      <p>{store.type}</p>
      <p>{store.subtype}</p>
      <p>{store.brand}</p>
      <p>{store.proof}</p>
    </div>
  );
}
