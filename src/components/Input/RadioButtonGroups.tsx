type RadioButtonGroupsProps = {
  items: any;
  source: string;
  onChange?: any;
  label?: string;
  values?: string | null;
};

export const RadioButtonGroups = (props: RadioButtonGroupsProps) => {
  const { source, items, values, onChange, label } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "10xp",
        marginBottom: "10px",
      }}>
      <label>{label}</label>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {items.map((child: any, idx: number) => {
          const { value, label } = child;
          return (
            <div key={idx}>
              <input
                name={source}
                type="radio"
                value={value}
                id={source + value}
                checked={values === value}
                onChange={onChange}
              />
              <label htmlFor={source + value}>{label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
