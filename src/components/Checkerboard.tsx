import { useState } from "react";
import { Square } from "./Square";

type CheckerboardProps = {
  board: number;
};

export const Checkerboard = (props: CheckerboardProps) => {
  const { board } = props;
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(board * board).fill(null));

  const handleClick = (index: number) => {
    console.log(index);
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

  return (
    <div>
      <table>
        <tbody>
          {Array.from({ length: board }).map((_, i) => {
            const indexRow = i + 1;
            return (
              <tr key={indexRow}>
                {Array.from({ length: board }).map((_, j) => {
                  const indexCol = j + 1;
                  const index = indexRow * board - board + indexCol - 1;
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
  );
};
