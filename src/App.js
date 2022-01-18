import React, { useState, useEffect } from "react";
import Dice from "./components/Dice";
import styled from "styled-components";

function App() {
  const [newDice, setNewDice] = useState([]);

  useEffect(() => {
    setNewDice(allNewDice());
  }, []);

  const allNewDice = () => {
    const randomDice = [];
    const maxNumOnDice = 6;
    for (let i = 0; i < 10; i++) {
      randomDice.push(Math.ceil(Math.random() * maxNumOnDice));
    }
    return randomDice;
  };

  return (
    <AppContainer>
      <DiceContainer>
        {newDice.map((dice, index) => (
          <Dice key={index} value={dice} />
        ))}
      </DiceContainer>
      <button onClick={() => setNewDice(allNewDice())}>Roll</button>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  height: 400px;
  max-width: 800px;
  border-radius: 5px;

  > button {
    width: 100px;
    height: 50px;
    color: white;
    background-color: #5035ff;
    border: none;
    margin-top: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const DiceContainer = styled.div`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
`;
