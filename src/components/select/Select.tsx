import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";

interface selectOptionType {
  label: string;
  value: string | number;
}

interface SelectProps {
  options: selectOptionType[];
  value: string;
  onChange?: (newOption: string) => void;
  icon?: ReactNode;
  containerStyle?: CSSProperties;
  optionStyle?: CSSProperties;
  iconStyle?: CSSProperties;
}

export const Select = (props: SelectProps) => {
  const { options, value, onChange } = props;

  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsSelectOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onChangeSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const defaultOptionItemStyle: React.CSSProperties = {
    padding: "8px",
    cursor: "pointer",
  };

  const defaultIconStyle: React.CSSProperties = {
    transform: isSelectOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.25s ease",
    cursor: "pointer",
  };
  // const mergedIconStyle = { ...defaultIconStyle, ...iconStyle };

  return (
    <div ref={selectRef} style={{ position: "relative" }}>
      <div
        className="flex items-center justify-between w-50 px-3 py-1 rounded-md border border-neutral-500 cursor-pointer"
        onClick={() => {
          onChangeSelect();
        }}
      >
        {/* 선택된 값 */}
        <p>{value}</p>
        <span style={defaultIconStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 100 100"
          >
            <rect width="100" height="100" rx="8" ry="8" fill="transparent" />
            <path
              d="M30 40 L50 60 L70 40"
              fill="none"
              stroke="#ccc"
              strokeWidth={6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      {isSelectOpen && (
        <div className="absolute mt-1 w-50 h-35 pt-1 rounded-md bg-neutral-700 overflow-auto custom-view-scrollbar">
          {options?.length &&
            options.map((v) => {
              return (
                <div
                  className={`px-2 py-2 cursor-pointer`}
                  style={{
                    background: v.label === value ? "#737373" : "transparent",
                  }}
                  onClick={() => {
                    onChange?.(v.label);
                    setIsSelectOpen(false);
                  }}
                >
                  {v.label}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
