import { useState } from "react";
import { Checkerboard } from "../components/Checkerboard";
import { Game } from ".";

export const Chessboard = () => {
  const [board, setBoard] = useState(3);
  const [chess, setChess] = useState<number>(0);
  return (
    <Game>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <h4 style={{ margin: "5px" }}>Chessboard</h4>
            <input
              type="number"
              value={board}
              min={3}
              onChange={(e) => setBoard(+e.target.value)}
            />
            <button onClick={() => setChess(board)}>Set</button>
          </div>
          <div>
            <Checkerboard boardSize={chess} />
          </div>
        </div>
      </div>
    </Game>
  );
};
