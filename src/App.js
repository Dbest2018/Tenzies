import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { nanoid } from "nanoid";

import Dice from "./components/Dice";

function App() {
  const [newDice, setNewDice] = useState([]);

  useEffect(() => {
    setNewDice(allNewDice());
  }, []);

  const allNewDice = () => {
    const randomDice = [];
    const maxNumOnDice = 6;
    for (let i = 0; i < 10; i++) {
      randomDice.push({
        id: nanoid(),
        value: Math.ceil(Math.random() * maxNumOnDice),
        isHeld: false,
      });
    }
    return randomDice;
  };

  const rollDice = () => {
    setNewDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : {
              id: nanoid(),
              value: Math.ceil(Math.random() * 6),
              isHeld: false,
            };
      })
    );
  };

  const holdDice = (id) => {
    setNewDice((prevDice) => {
      return prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  };

  return (
    <AppContainer>
      <Title>Tenzies</Title>
      <Instruction>
        Roll until all dice are the same. Click each die to freeze it at it
        current value between rolls
      </Instruction>
      <DiceContainer>
        {newDice.map((dice) => (
          <Dice
            key={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            holdDice={() => holdDice(dice.id)}
          />
        ))}
      </DiceContainer>
      <button onClick={rollDice}>Roll</button>
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

  > button:focus {
    outline: none;
  }

  > button:active {
    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
  }
`;

const Title = styled.h2`
  font-size: 40px;
  margin: 0;
`;

const Instruction = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  margin-top: 0;
  text-align: center;
`;

const DiceContainer = styled.div`
  display: grid;
  grid-template: auto auto / repeat(5, 1fr);
  gap: 20px;
`;
