import { ReactNode } from "react";

// 라디오 버튼 옵션 타입
export interface RadioOption {
  id: string;
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

// 라디오 버튼 Props
interface RadioProps {
  option: RadioOption;
  checked: boolean;
  onChange: (value: string) => void;

  // 스타일 커스터마이징 옵션
  containerStyle?: React.CSSProperties;
  radioStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  checkedStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  innerDotStyle?: React.CSSProperties;
}

// 단일 라디오 버튼 컴포넌트
export const Radio = (props: RadioProps) => {
  const {
    option,
    checked,
    onChange,
    containerStyle = {},
    radioStyle = {},
    labelStyle = {},
    checkedStyle = {},
    disabledStyle = {},
    innerDotStyle = {},
  } = props;

  // 기본 스타일
  const defaultContainerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
    cursor: option.disabled ? "not-allowed" : "pointer",
    opacity: option.disabled ? 0.6 : 1,
  };

  const defaultRadioStyle: React.CSSProperties = {
    width: "18px",
    height: "18px",
    border: "2px solid #cbd5e0",
    borderRadius: "50%",
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
    borderColor: "#4299e1",
  };

  const defaultDisabledStyle: React.CSSProperties = {
    backgroundColor: "#f7fafc",
    borderColor: "#e2e8f0",
  };

  const defaultInnerDotStyle: React.CSSProperties = {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#4299e1",
    transition: "transform 0.2s ease, opacity 0.2s ease",
    transform: checked ? "scale(1)" : "scale(0)",
    opacity: checked ? 1 : 0,
  };

  // 병합된 스타일
  const mergedContainerStyle = { ...defaultContainerStyle, ...containerStyle };
  const mergedLabelStyle = { ...defaultLabelStyle, ...labelStyle };
  const mergedInnerDotStyle = { ...defaultInnerDotStyle, ...innerDotStyle };

  // 라디오 스타일은 상태에 따라 다른 스타일 적용
  let mergedRadioStyle = { ...defaultRadioStyle, ...radioStyle };

  if (checked) {
    mergedRadioStyle = {
      ...mergedRadioStyle,
      ...defaultCheckedStyle,
      ...checkedStyle,
    };
  }

  if (option.disabled) {
    mergedRadioStyle = {
      ...mergedRadioStyle,
      ...defaultDisabledStyle,
      ...disabledStyle,
    };
  }

  // 클릭 핸들러
  const handleClick = () => {
    if (!option.disabled) {
      onChange(option.value);
    }
  };

  return (
    <div style={mergedContainerStyle} onClick={handleClick}>
      <div style={mergedRadioStyle}>
        <div style={mergedInnerDotStyle}></div>
      </div>
      <label className="no-select" style={mergedLabelStyle}>
        {option.label}
      </label>
    </div>
  );
};
