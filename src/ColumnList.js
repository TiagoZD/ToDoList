import React, { useState, useEffect } from "react";
import Column from "./Column";

const ColumnList = () => {
  const [columnId, setColumnId] = useState(0);
  const [columnText, setColumnText] = useState("");
  const [columnList, setColumnList] = useState(
    JSON.parse(localStorage.getItem("columns"))
  );
  const [isInputVisible, setInputVisible] = useState(false);

  const column = {
    id: JSON.parse(localStorage.getItem("columns")).length,
    text: columnText,
    active: true
  };

  useEffect(() => {
    updateLocalStorage();
  }, [columnList]);

  const handleChange = ({ target }) => {
    setColumnText(target.value);
  };

  const handleClick = () => {
    setInputVisible(true);
  };

  const handleAdd = ev => {
    ev.preventDefault();
    setColumnId(columnList.length + 1);
    setColumnList([...JSON.parse(localStorage.getItem("columns")), column]);
    setColumnText("");
    setInputVisible(false);
  };

  const updateLocalStorage = () => {
    localStorage.setItem("columns", JSON.stringify(columnList));
  };

  return (
    <div className="column-list">
      {columnList.map(column => (
        <div key={column.id}>
          <Column {...column} />
        </div>
      ))}
      <form onSubmit={handleAdd}>
        {isInputVisible && (
          <input
            className="add-column"
            value={columnText}
            onChange={handleChange}
          />
        )}
      </form>
      {!isInputVisible && (
        <button className="add-column" onClick={handleClick}>
          Add column +
        </button>
      )}
    </div>
  );
};

export default ColumnList;
