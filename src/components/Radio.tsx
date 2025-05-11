interface RadioOption {
  label: string;
  value: string;
}

interface RadioProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export const Radio = (props: RadioProps) => {
  const { options, value, onChange } = props;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <input
            type="radio"
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            style={{ width: "16px", height: "16px" }}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
