import { useFormContext } from "react-hook-form";
import { InputPros } from "../Input/TextInput";

export const TextInputForm = (props: InputPros) => {
  const { source, placeholder, label, type, validate } = props;
  const { register } = useFormContext();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "10px",
        marginTop: "10xp",
        marginBottom: "10px",
      }}>
      <label htmlFor={source}>{label}</label>
      <input
        {...register(source, ...validate)}
        placeholder={placeholder}
        type={type}
        id={source}
      />
    </div>
  );
};
