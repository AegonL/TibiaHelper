import React from "react";
import styled from "styled-components";
import "./fonts/fonts.css";

const StyledHeader = styled.div`
  font-family: "Martel";
  color: #666666;
  font-size: 70px;
  line-height: 1em;
  margin: 0 0 0 60px;
  text-align: center;
  margin-top: 5%;
  color: black;
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Header = () => {
  return <StyledHeader>Welcome to Tibia helper!</StyledHeader>;
};

export default Header;
