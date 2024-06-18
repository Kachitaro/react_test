type CheckboxInputProps = {
  source: string;
  label: string;
  onChange: any;
  value?: string;
};

export const CheckboxInput = (props: CheckboxInputProps) => {
  const { source, label, onChange, value } = props;
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
        checked={value ? true : false}
        value={value}
        type="checkbox"
        name={source}
        id={source}
        onChange={onChange}
      />
    </div>
  );
};
