import { useState } from "react";
import { Square } from "./Square";

type CheckerboardProps = {
  boardSize: number;
};

export const Checkerboard = (props: CheckerboardProps) => {
  const { boardSize } = props;
  const board = Math.pow(boardSize, 2);
  const [round , setRound] = useState(1);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(board).fill(null));

  const handleClick = (index: number) => {
    if (squares[index]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares: number[]) => {
    const lines = generateWinningLines(boardSize);
    for (let i = 0; i < lines.length; i++) {
      const [a, ...rest] = lines[i];
      if (squares[a] && rest.every((index) => squares[a] === squares[index])) {
        return squares[a];
      }
    }
    return null;
  };

  const generateWinningLines = (boardSize: number) => {
    const lines = [];
    const winLength = boardSize < 5 ? boardSize : 5;
    // Đường thắng ngang
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col <= boardSize - winLength; col++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push(row * boardSize + col + i);
        }
        lines.push(line);
      }
    }
    // Đường thắng dọc
    for (let col = 0; col < boardSize; col++) {
      for (let row = 0; row <= boardSize - winLength; row++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push((row + i) * boardSize + col);
        }
        lines.push(line);
      }
    }
    // Đường thắng chéo chính
    for (let row = 0; row <= boardSize - winLength; row++) {
      for (let col = 0; col <= boardSize - winLength; col++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push((row + i) * boardSize + col + i);
        }
        lines.push(line);
      }
    }
    // Đường thắng chéo phụ
    for (let row = 0; row <= boardSize - winLength; row++) {
      for (let col = winLength - 1; col < boardSize; col++) {
        const line = [];
        for (let i = 0; i < winLength; i++) {
          line.push((row + i) * boardSize + col - i);
        }
        lines.push(line);
      }
    }
    return lines;
  };
  const winner = calculateWinner(squares);

  const handleReset = () => {
    if (winner) {
      localStorage.setItem(`round_${round}`, JSON.stringify(winner));
    } else {
      localStorage.setItem(`round_${round}`, JSON.stringify("Draw"));
    }
    setSquares(Array(board).fill(null));
    setXIsNext(true);
    setRound(round + 1);
  };
  return (
    <>
      <div>
        <button style={{ marginTop: "5px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
      {winner && <h3>Winner: {winner}</h3>}
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
    </>
  );
};
