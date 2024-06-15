import { useState } from "react";
import { Checkerboard } from "./Checkerboard";

export const Chessboard = () => {
  const [board, setBoard] = useState(3);
  const [chess, setChess] = useState<number>(0);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h4 style={{ margin: "5px" }}>Chessboard</h4>
        <input
          type="number"
          value={board}
          onChange={(e) => setBoard(+e.target.value)}
        />
         <button onClick={() => setChess(board)}>Set</button>
          <button onClick={() => setChess(0)}>Reset</button>
      </div>
      <div>
        <Checkerboard board={chess} />
      </div>
    </div>
  );
};
