import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
`;

const CharInfo = ({ name, vocation, level, reason }) => {
  return (
    <div>
      <StyledList>
        <li>Name : {name} </li>
        <li>Vocation : {vocation}</li>
        <li>Level : {level}</li>
        <br />
        <li>Reason of Death : {reason}</li>
      </StyledList>
    </div>
  );
};

export default CharInfo;
