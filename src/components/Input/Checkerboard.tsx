import { useState } from "react";
import { Square } from "../Square";
import {
  useCalculateWinner,
  usePerson,
  usePlayer,
  useWiningLine,
} from "../../hooks";
import { useGame } from "../Game";

type CheckerboardProps = {
  boardSize: number;
};

export const Checkerboard = (props: CheckerboardProps) => {
  const { boardSize } = props;
  const board = Math.pow(boardSize, 2);
  const lines = useWiningLine(boardSize);
  const [round, setRound] = useState(1);
  const [squares, setSquares] = useState(Array(board).fill(null));
  const [playerOne, setPlayerOne] = usePerson("X");
  const [playerTwo, setPlayerTwo] = usePerson("O");
  const { currentPlayer, togglePlayer, declareWinner } = usePlayer(playerOne);
  const winner = useCalculateWinner(lines, squares);
  const { result, saveResult } = useGame();

  const handleClick = (index: number) => {
    if (currentPlayer === playerOne) {
      const newSquares = setPlayerOne(squares, index);
      if (newSquares) setSquares(newSquares);
    } else if (currentPlayer === playerTwo) {
      const newSquares = setPlayerTwo(squares, index);
      if (newSquares) setSquares(newSquares);
    }
    togglePlayer(playerOne, playerTwo);
  };

  const handleReset = () => {
    if (winner) {
      declareWinner(winner);
      saveResult(winner);
    } else {
      saveResult("Draw");
    }
    setSquares(Array(board).fill(null));
    setRound(round + 1);
  };
  return (
    <>
      <div>
        <button
          disabled={!boardSize}
          style={{ marginTop: "5px" }}
          onClick={handleReset}>
          Reset
        </button>
      </div>
      {winner && <h3>Winner: {winner}</h3>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <table>
            <tbody>
              {Array.from({ length: boardSize }).map((_, i) => {
                const indexRow = i + 1;
                return (
                  <tr key={indexRow} style={{ display: "flex" }}>
                    {Array.from({ length: boardSize }).map((_, j) => {
                      const indexCol = j + 1;
                      const index =
                        indexRow * boardSize - boardSize + indexCol - 1;
                      return (
                        <Square
                          key={indexCol}
                          value={squares[index]}
                          handleClick={() => handleClick(index)}
                        />
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <h4>Result</h4>
        <div>
          <table>
            <thead>
              <tr>
                <th>Round</th>
                <th></th>
                <th>Winner</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((item: string, index: number) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <th></th>
                  <td>{item}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
