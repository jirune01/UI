interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = (props: CheckboxProps) => {
  const { label, checked = false, onChange } = props;

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{ width: "16px", height: "16px" }}
      />
      <span>{label}</span>
    </label>
  );
};
