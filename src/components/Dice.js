import React from "react";
import styled from "styled-components";

const Dice = ({ value }) => {
  return (
    <DieFace>
      <h2>{value}</h2>
    </DieFace>
  );
};

export default Dice;

const DieFace = styled.div`
  height: 50px;
  width: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;
`;
