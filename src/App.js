import React, { useEffect } from "react";
import ColumnList from "./ColumnList";
import SearchBox from "./SearchBox";

import { render } from "react-dom";

const App = () => {
  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify([]));
    localStorage.setItem("cards", JSON.stringify([]));
  });

  return (
    <div>
      <ColumnList /> <SearchBox />
    </div>
  );
};

render(<App />, document.getElementById("root"));
