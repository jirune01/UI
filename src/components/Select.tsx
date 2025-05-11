interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Select = (props: SelectProps) => {
  const { options, value, onChange, placeholder } = props;

  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
        width: "100%",
        maxWidth: "300px",
        backgroundColor: "white",
        cursor: "pointer",
      }}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
