import Header from "./components/Header";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import CharInfo from "./components/CharInfo";
import Vendor from "./vendorcomponents/Vendor";

function App() {
  const [character, setCharacter] = useState("");
  const [playerDeath, setPlayerDeath] = useState([]);
  const [profile, setProfile] = useState({
    name: "",
    vocation: "",
    level: "",
  });
  console.log(playerDeath);

  const onSearchSubmit = (input) => {
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
    <div className="App">
      <Header className="header" />
      <Search onSearchSubmit={onSearchSubmit} />
      <CharInfo
        name={profile.name}
        vocation={profile.vocation}
        level={profile.level}
        reason={playerDeath.map((death) => (
          <li>{death.reason}</li>
        ))}
      />
      <Vendor />
    </div>
  );
}

export default App;
