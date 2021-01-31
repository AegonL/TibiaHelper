import React, { useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.form`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Search = ({ onSearchSubmit }) => {
  const [input, setInput] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSearchSubmit(input);
  };

  return (
    <StyledSearch onSubmit={onSubmitHandler}>
      <div>
        <input
          type="text"
          placeholder="Search Character..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </StyledSearch>
  );
};

export default Search;
