type SquareProps = {
  value: string[];
  handleClick: () => void;
};

export const Square = (props: SquareProps) => {
  const { value, handleClick } = props;
  return (
    <button
      onClick={handleClick}
      style={{ width: "50px", height: "50px" }}>
      {value}
    </button>
  );
};
