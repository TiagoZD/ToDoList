import React from "react";
import handleSearch from "./Column";

const SearchBox = () => (
  <div>
    <input type="text" onChange={handleSearch} />
  </div>
);

export default SearchBox;
