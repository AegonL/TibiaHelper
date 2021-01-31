import React from "react";
import Deaths from "../Deaths";

const CharInfo = ({ name, vocation, level }) => {
  return (
    <div>
      <ul>
        <li>Name : {name} </li>
        <li>Vocation : {vocation}</li>
        <li>Level : {level}</li>
      </ul>
    </div>
  );
};

export default CharInfo;
