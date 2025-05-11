import { ReactNode } from "react";

// 체크박스 아이템 타입
export interface CheckboxOption {
  id: string;
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

// 체크박스 컴포넌트 Props
interface CheckboxProps {
  option: CheckboxOption;
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;

  // 스타일 커스터마이징 옵션
  containerStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  checkedStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
}

// 단일 체크박스 컴포넌트
export const CheckBox = (props: CheckboxProps) => {
  const {
    option,
    checked,
    onChange,
    containerStyle = {},
    checkboxStyle = {},
    labelStyle = {},
    checkedStyle = {},
    disabledStyle = {},
  } = props;

  // 기본 스타일
  const defaultContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    cursor: option.disabled ? "not-allowed" : "pointer",
    opacity: option.disabled ? 0.6 : 1,
  };

  const defaultCheckboxStyle: React.CSSProperties = {
    width: "18px",
    height: "18px",
    border: "2px solid #cbd5e0",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
    backgroundColor: "white",
    transition: "all 0.2s ease",
  };

  const defaultLabelStyle: React.CSSProperties = {
    fontSize: "16px",
  };

  const defaultCheckedStyle: React.CSSProperties = {
    backgroundColor: "#4299e1",
    borderColor: "#4299e1",
  };

  const defaultDisabledStyle: React.CSSProperties = {
    backgroundColor: "#f7fafc",
    borderColor: "#e2e8f0",
  };

  // 병합된 스타일
  const mergedContainerStyle = { ...defaultContainerStyle, ...containerStyle };
  const mergedLabelStyle = { ...defaultLabelStyle, ...labelStyle };

  // 체크박스 스타일은 상태에 따라 다른 스타일 적용
  let mergedCheckboxStyle = { ...defaultCheckboxStyle, ...checkboxStyle };

  if (checked) {
    mergedCheckboxStyle = {
      ...mergedCheckboxStyle,
      ...defaultCheckedStyle,
      ...checkedStyle,
    };
  }

  if (option.disabled) {
    mergedCheckboxStyle = {
      ...mergedCheckboxStyle,
      ...defaultDisabledStyle,
      ...disabledStyle,
    };
  }

  // 클릭 핸들러
  const handleClick = () => {
    if (!option.disabled) {
      onChange(option.value, !checked);
    }
  };

  // 체크 마크 (SVG)
  const checkMark = checked ? (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ) : null;

  return (
    <div style={mergedContainerStyle} onClick={handleClick}>
      <div style={mergedCheckboxStyle}>{checkMark}</div>
      <label className="no-select" style={mergedLabelStyle}>
        {option.label}
      </label>
    </div>
  );
};
