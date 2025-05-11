interface InputProps {
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  const { type = "text", placeholder, value, onChange } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      style={{
        padding: "8px 12px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "14px",
        width: "100%",
        maxWidth: "300px",
      }}
    />
  );
};
