import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import {
  ShowData,
  TextInput,
  RadioButtonGroups,
  CheckboxInput,
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
  const [info, setInfo] = useState({
    name: "",
    email: "",
    text: "",
    gender: "",
    notify: "",
  });
  const navigator = useNavigate();
  const personName = ["Tài", "Hà", "Vi"];
  const colors = ["Đỏ", "Xanh", "Vàng"];

  const items: { value: string; label: string }[] = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
  ];

  // eslint-disable-next-line no-undef
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(info);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked, type, name } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

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
      <form onSubmit={handleSubmit}>
        <TextInput source="name" type="text" label="Name" onChange={onChange} />
        <TextInput
          source="email"
          type="email"
          label="Email"
          onChange={onChange}
        />
        <TextInput
          source="phone"
          type="tel"
          label="Phone Number"
          onChange={onChange}
        />
        <TextInput source="text" type="text" label="Text" onChange={onChange} />
        <RadioButtonGroups
          source="gender"
          label="Gender"
          items={items}
          values={info.gender}
          onChange={onChange}
        />
        <CheckboxInput
          value={info.notify}
          source={"notify"}
          label={"Notification Mail"}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
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
