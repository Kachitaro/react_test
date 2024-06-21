export type InputPros = {
  source: string;
  type: "text" | "email" | "tel" | "password";
  placeholder?: string;
  onChange?: any;
  label: string;
  pattern?: string;
  register?: any;
  validate?: any;
  defaultValue?: string;
};

export const TextInput = (props: InputPros) => {
  const { source, placeholder, onChange, label, type } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10xp",
        marginBottom: "10px",
      }}>
      <label htmlFor={source}>{label}</label>
      <input
        {...props}
        placeholder={placeholder}
        type={type}
        id={source}
        onChange={onChange}
      />
    </div>
  );
};
