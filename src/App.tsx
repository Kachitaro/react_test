import { useEffect, useState } from "react";
import "./App.css";
import {
  ShowData,
} from "./components";
import { useNavigate } from "react-router-dom";

function Button({
  value,
  onClick,
  isActive,
}: {
  value: string;
  onClick: () => void;
  isActive: boolean;
}) {
  return (
    <button
      style={{
        backgroundColor: isActive ? "blue" : "white",
        color: isActive ? "white" : "black",
      }}
      onClick={() => {
        onClick();
      }}>
      {value}
    </button>
  );
}

function PersonChoice({
  person,
  selected,
}: {
  person: string;
  selected: string;
}) {
  useEffect(() => {
    console.log(`${person} đã chọn màu ${selected}`);
  }, [person, selected]);
  return <h1>{person && selected && `${person} đã chọn màu ${selected}`}</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState("");
  const [color, setColor] = useState("");

  const navigator = useNavigate();
  const personName = ["Tài", "Hà", "Vi"];
  const colors = ["Đỏ", "Xanh", "Vàng"];

  const handleNext = () => {
    return navigator("/contacts");
  };

  const handleGame = () => {
    return navigator("/game");
  };

  const handleNextForm = () => {
    return navigator("/form");
  };

  return (
    <>
      <button style={{ marginBottom: "10px" }} onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      <div style={{ display: "flex", gap: "2px" }}>
        {personName.map((item: string, idx: number) => (
          <Button
            key={idx}
            isActive={person === item}
            value={item}
            onClick={() => setPerson(item)}
          />
        ))}
      </div>
      <br />
      <div style={{ display: "flex", gap: "2px" }}>
        {colors.map((item: string, idx: number) => (
          <Button
            key={idx}
            isActive={color === item}
            value={item}
            onClick={() => setColor(item)}
          />
        ))}
      </div>
      {person && color && <PersonChoice person={person} selected={color} />}
      <br />
      <div style={{ display: 'flex', gap: '5px'}}>
        <button onClick={handleNext}>Next Page</button>
        <button onClick={handleNextForm}>Next Page React Hook Form</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={handleGame}>Đánh cờ Caro</button>
      </div>
      <ShowData n={count} />
    </>
  );
}

export default App;
