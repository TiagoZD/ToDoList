import React, { useState, useEffect } from "react";
import Card from "./Card";
import DuplicateColumn from "./Helpers/DuplicateColumn";

const Column = ({ id, active, text }) => {
  const [columnName, setColumnName] = useState(text);
  const [cardId, setCardId] = useState(0);
  const [cardText, setCardText] = useState("");
  const [cardList, setCardList] = useState(
    JSON.parse(localStorage.getItem("cards"))
  );
  const [isInputVisible, setInputVisible] = useState(false);
  const [isColumnVisible, setColumnVisible] = useState(true);

  const card = {
    id: JSON.parse(localStorage.getItem("cards")).length,
    text: cardText,
    active: true,
    columnId: id
  };

  useEffect(() => {
    updateLocalStorage();
  }, [cardList]);

  const handleChange = ({ target }) => {
    setCardText(target.value);
  };

  const handleClick = () => {
    setInputVisible(true);
  };

  const handleAdd = ev => {
    ev.preventDefault();

    setCardId(cardList.length + 1);
    setCardList([...JSON.parse(localStorage.getItem("cards")), card]);
    setCardText("");
    setInputVisible(false);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("cards", JSON.stringify(cardList));
  };

  const deleteColumn = () => {
    setColumnVisible(false);
  };


  const handleDuplicate = () => {
    DuplicateColumn({ id, active, text });
    JSON.parse(localStorage.getItem("columns"));
  };

  return (
    <div>
      {isColumnVisible && (
        <div className="cont-column">
          <div
            draggable
            onMouseOver={isOnMouseOver}
            onMouseLeave={isOnMouseDown}
            onDragOver={e => this.onDragOver(e)}
          >
            <div className="top-group">
              <input
                className="titulo"
                value={columnName}
                onChange={e => setColumnName(e.target.value)}
              />
              <button className="duplicate-column" onClick={handleDuplicate}>
                x2
              </button>
              <button className="delete-column" onClick={deleteColumn}>
                x
              </button>
            </div>
            {cardList.map(card => {
              if (card.columnId == id) {
                return (
                  <div key={card.id}>
                    <Card {...card} />
                  </div>
                );
              }
            })}

            <form onSubmit={handleAdd}>
              {isInputVisible && (
                <input
                  className="card"
                  value={cardText}
                  onChange={handleChange}
                />
              )}
            </form>
            {!isInputVisible && (
              <button className="add-card" onClick={handleClick}>
                +
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
