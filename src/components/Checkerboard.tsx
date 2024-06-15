type CheckerboardProps = {
  board: number;
};

export const Checkerboard = (props: CheckerboardProps) => {
  const { board } = props;
  return (
    <div>
      <table>
        <tbody>
          {Array.from({ length: board }).map((_, i) => (
            <tr key={i}>
              {Array.from({ length: board }).map((_, j) => (
                <td
                  key={j}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: (i + j) % 2 === 0 ? "black" : "white",
                  }}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
