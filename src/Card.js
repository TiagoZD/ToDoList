import React, { useState, useEffect } from "react";
import DuplicateCard from "./DuplicateCard";

const Card = ({ id, text, active, columnId }) => {
  const [nuevoTexto, setNuevoTexto] = useState(text);
  const [isButtonVisible, setButtonVisible] = useState(false);
  const [isCardVisible, setCardVisible] = useState(true);

  const isOnMouseOver = () => {
    setButtonVisible(true);
  };

  const isOnMouseDown = () => {
    setButtonVisible(false);
  };

  const deleteCard = () => {
    setCardVisible(false);
  };

  const onDragStart = (ev, id) => {
    ev.dataTrasfer.setData("id", id);
  };

  const handleDuplicate = () => {
    DuplicateCard({ text, active, columnId });
    JSON.parse(localStorage.getItem("cards"));
  };

  return (
    <div>
      {isCardVisible && (
        <div
          key={text}
          className="cont-card"
          onDragStart={s => onDragStart(s, id)}
          draggable
          onMouseOver={isOnMouseOver}
          onMouseLeave={isOnMouseDown}
        >
          {!isButtonVisible}
          <input
            className="card"
            value={nuevoTexto}
            onChange={e => {
              setNuevoTexto(e.target.value);
            }}
          />

          {isButtonVisible && (
            <button className="duplicate-card" onClick={handleDuplicate}>
              x2
            </button>
          )}
          {isButtonVisible && (
            <button className="delete-card" onClick={deleteCard}>
              x
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
