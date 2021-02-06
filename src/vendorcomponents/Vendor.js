import React, { useState } from "react";
import styled from "styled-components";
import ITEMDATA from "./Item_Data.json";

const StyledSearch = styled.form`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 20px;
`;

const Vendor = () => {
  const [itemInput, setItemInput] = useState("");
  // const [item, setItem] = useState("");

  // const filteredItems = items.filter((item) =>
  //   item.name.toLowerCase().includes(itemInput)
  // );
  // setItem(...filteredItems.name);

  return (
    <StyledSearch>
      <div>
        <StyledInput
          type="text"
          placeholder="Search Character..."
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
      </div>

      {itemInput && (
        <div>
          {ITEMDATA.filter((item) => {
            if (itemInput === "") {
              return item;
            } else if (
              item.item_name.toLowerCase().includes(itemInput.toLowerCase())
            ) {
              return item;
            }
          }).map((item) => {
            return (
              <p key={item.id}>
                {item.item_name}
                <br />
                {item.vendor_name}
                <br />
                {item.price}
              </p>
            );
          })}
        </div>
      )}
    </StyledSearch>
  );
};

export default Vendor;
