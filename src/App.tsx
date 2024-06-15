import { useEffect, useState } from "react";
import "./App.css";
import { ShowData } from "./components";
import { redirect, useNavigate } from "react-router-dom";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigator = useNavigate();
  const personName = ["Tài", "Hà", "Vi"];
  const colors = ["Đỏ", "Xanh", "Vàng"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
  };

  const handleNext = () => {
    navigator("/contacts");
    return redirect("/contacts");
  }

  const handleGame = () => {
    navigator("/game");
    return redirect("/game");
  }

  // const units = useGetUnist();
  // console.log(units);

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleNext}>Next Page</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleGame}>Đánh cờ Caro</button> 
      <ShowData n={count} />
    </>
  );
}

export default App;
