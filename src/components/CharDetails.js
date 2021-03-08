import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSearch = styled.form``;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledMainDiv = styled.div`
  text-align: center;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 20px;
  text-align: center;
`;

const CharDetails = () => {
  const [character, setCharacter] = useState("");
  const [playerDeath, setPlayerDeath] = useState([]);
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState({
    name: "",
    vocation: "",
    level: "",
  });

  console.log(playerDeath.length);
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setCharacter(input);
  };

  useEffect(() => {
    fetch(`https://api.tibiadata.com/v2/characters/${character}.json`)
      .then((res) => res.json())
      .then((data) => {
        setPlayerDeath([...data.characters.deaths]);
        setProfile({
          name: data.characters.data.name,
          vocation: data.characters.data.vocation,
          level: data.characters.data.level,
        });
      });
  }, [character]);
  return (
    <StyledSearch onSubmit={onSearchSubmit}>
      <StyledMainDiv>
        <StyledInput
          type="text"
          placeholder="Search Character..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <StyledList>
          <li>Name : {profile.name} </li>
          <li>Vocation : {profile.vocation}</li>
          <li>Level : {profile.level}</li>

          {input && playerDeath.length > 0 ? (
            <li>
              Reason of Death :{" "}
              {playerDeath.map((death) => {
                return <li>{death.reason}</li>;
              })}
            </li>
          ) : (
            <div>This character hasn't died.</div>
          )}
        </StyledList>
      </StyledMainDiv>
    </StyledSearch>
  );
};

export default CharDetails;
