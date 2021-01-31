import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Header = () => {
  return <StyledHeader>Welcome to Tibia helper!</StyledHeader>;
};

export default Header;
