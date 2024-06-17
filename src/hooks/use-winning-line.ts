export const useWiningLine = (boardSize: number) => {
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
