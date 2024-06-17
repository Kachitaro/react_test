import { createContext, useContext, useState } from "react";
const GameContext = createContext({} as any);
// eslint-disable-next-line react-refresh/only-export-components
export const useGame = () => useContext(GameContext);
export const Game = ({ children }: any) => {
  const [result, setResult] = useState<any[]>([]);

  const saveResult = (newResult: any) => {
    setResult([...result, newResult]);
  };
  return (
    <GameContext.Provider value={{ result, saveResult }}>
      {children}
    </GameContext.Provider>
  );
};
