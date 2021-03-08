import React, { useState } from "react";
import styled from "styled-components";
import ITEMDATA from "./Item_Data.json";

const StyledSearch = styled.form`
  font-size: 1.5em;
  text-align: center;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  font-size: 20px;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Vendor = () => {
  const [itemInput, setItemInput] = useState("");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([
    {
      name: "",
      price: 0,
    },
  ]);

  return (
    <StyledSearch>
      <div>
        <StyledInput
          type="text"
          placeholder="Search Item..."
          value={itemInput}
          onChange={(e) => setItemInput(e.target.value)}
        />
      </div>
      {total}
      {cart.map((item) => {
        return <p>{item.price}</p>;
      })}
      {itemInput && (
        <StyledDiv>
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
                <br />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setTotal(total + item.price);
                  }}
                >
                  Add
                </button>
              </p>
            );
          })}
        </StyledDiv>
      )}
    </StyledSearch>
  );
};

export default Vendor;
