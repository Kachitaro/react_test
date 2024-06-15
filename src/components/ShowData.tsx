import { useMemo } from "react";

export const ShowData = ({ n }: { n: number }) => {
  const nums = useMemo(() => {
    console.log("Calculating nums");
    const result: number[] = [];
    if (n > 0) result.push(1);
    if (n > 5) result.push(5);
    if (n > 10) result.push(10);
    if (n === 20) result.push(1);
    if (n === 30) result.push(5);
    if (n === 40) result.push(10);
    result.push(n);
    return result;
  }, [n]);

  const fibonacciResults = useMemo(() => {
    console.log("Calculating fibonacci");
    const results = {} as Record<number, number>;
    for (const num of nums) {
      let a = 0,
        b = 1,
        temp;
      for (let i = 0; i < num; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
      results[num] = b;
    }
    return results;
  }, [nums]);

  return (
    <div>
      <p>Giá trị n: {n}</p>
      <div>
        {Object.entries(fibonacciResults).map(([num, result]) => (
          <p key={num}>
            Fibonacci({num}): {result}
          </p>
        ))}
      </div>
    </div>
  );
};
