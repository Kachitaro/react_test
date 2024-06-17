export const useCalculateWinner = (lines: number[][], squares: number[]) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, ...rest] = lines[i];
    if (squares[a] && rest.every((index) => squares[a] === squares[index])) {
      return squares[a];
    }
  }
  return null;
};
