import React from "react";
import styled from "styled-components";

const Dice = ({ id, value, isHeld, holdDice }) => {
  const styles = {
    backgroundColor: isHeld ? "#59e391" : "white",
  };
  return (
    <DieFace style={styles} onClick={holdDice}>
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
  cursor: pointer;
`;

// const DieFaceGreen = styled.div`
//   height: 50px;
//   width: 50px;
//   box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
//   border-radius: 10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #59e391;
//   cursor: pointer;
// `;
