import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Calculator = () => {
  const [radio, setRadio] = useState("Sorcerer");
  const [input, setInput] = useState(1);
  const [vocation, setVocation] = useState([
    {
      name: "Sorcerer/Druid",
    },
    {
      name: "Knight",
    },
    {
      name: "Paladin",
    },
  ]);

  useEffect(() => {
    setVocation({
      name: radio,
    });
  }, [radio]);

  let hp = 0;
  let mana = 0;
  const starthp = 185;
  const startmana = 90;

  if (vocation.name === "Paladin") {
    hp = 10;
    mana = 15;
  } else if (vocation.name === "Knight") {
    hp = 15;
    mana = 5;
  } else {
    hp = 5;
    mana = 30;
  }

  const StyledCalc = styled.div`
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
  `;

  return (
    <StyledCalc>
      <form>
        <input
          type="text"
          placeholder="Search Character..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <label>Sorcerer/Druid : </label>
        <input
          type="radio"
          checked={radio === "Sorcerer/Druid"}
          value="Sorcerer/Druid"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        <br />
        <label>Paladin : </label>
        <input
          type="radio"
          checked={radio === "Paladin"}
          value="Paladin"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        <br />
        <label>Knight : </label>
        <input
          type="radio"
          checked={radio === "Knight"}
          value="Knight"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        <br />
      </form>
      {input < 8 ? (
        <h1>Enter a level that's above than 8. </h1>
      ) : (
        <h1>
          A level {input} {vocation.name} will have {starthp + (input - 8) * hp}{" "}
          HP and {startmana + mana * (input - 8)} Mana.
        </h1>
      )}
    </StyledCalc>
  );
};

export default Calculator;
