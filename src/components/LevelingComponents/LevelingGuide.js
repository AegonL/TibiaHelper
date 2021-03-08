import React, { useState } from "react";
import DATA from "./Leveling_Data.json";

const LevelingGuide = () => {
  const [level, setLevel] = useState({
    min: 0,
    max: 0,
  });

  const handleChange = (e) => {
    setLevel((curr) => ({
      ...curr,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="min"
          onChange={handleChange}
          value={level.min}
          placeholder="min"
        ></input>
        <input
          name="max"
          onChange={handleChange}
          value={level.max}
          placeholder="max"
        ></input>
        <button type="submit">Submit</button>

        {DATA.filter((item) => {
          if (level.min < item.level && item.level < level.max) {
            return item;
          }
        }).map((item) => {
          return <p>{item.level}</p>;
        })}
      </form>
    </div>
  );
};

export default LevelingGuide;
