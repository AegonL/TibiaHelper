import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./fonts/fonts.css";

const StyledList = styled.ul`
  list-style: none;
  font-family: Martel;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Nav = () => {
  return (
    <nav>
      <StyledList>
        <Link to="/Vendor">
          <li>Item Info</li>
        </Link>
        <Link to="/CharDetails">
          <li>Character Info</li>
        </Link>
        <Link to="Highscores">
          <li>Highscores</li>
        </Link>
        <Link to="Calculator">
          <li>Calculator</li>
        </Link>
        <Link to="LevelingGuide">
          <li>Leveling Guide</li>
        </Link>
      </StyledList>
    </nav>
  );
};

export default Nav;
