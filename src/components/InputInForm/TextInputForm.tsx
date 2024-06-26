import { useFormContext } from "react-hook-form";
import { InputPros } from "../Input/TextInput";
import { messageError } from "../../utils";

export const TextInputForm = (props: InputPros) => {
  const { source, placeholder, label, type, validate, defaultValue } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const message = messageError(errors, source, validate);
  return (
    <div style={{ marginBottom: "5px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}>
        <label htmlFor={source}>{label}</label>
        <input
          {...register(source, validate)}
          defaultValue={defaultValue}
          placeholder={placeholder}
          type={type}
          id={source}
        />
      </div>
      {errors[source] && <p style={{ margin: 0, color: "red" }}>{message}</p>}
    </div>
  );
};
