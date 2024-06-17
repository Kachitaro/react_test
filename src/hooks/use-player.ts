import { useState } from "react";

export const usePlayer = (initialPlayer: string) => {
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const togglePlayer = (playerOne: string, playerTwo: string) => {
    setCurrentPlayer(currentPlayer === playerOne ? playerTwo : playerOne);
  };
  const declareWinner = (player: string | any) => {
    setCurrentPlayer(player);
  };
  return { currentPlayer, togglePlayer, declareWinner };
};

export const usePerson = (initialSymbol: string) => {
  const person = initialSymbol;
  const handler = (array: string[], index: number) => {
    if (array[index]) {
      return;
    }
    const nextArray = array.slice();
    nextArray[index] = person;
    return nextArray;
  };
  return [person, handler] as const;
};
