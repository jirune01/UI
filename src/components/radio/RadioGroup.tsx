import { useState } from "react";
import { Radio, RadioOption } from "./Radio";

// 라디오 그룹 Props
interface RadioGroupProps {
  options: RadioOption[];
  defaultSelected?: string;
  onChange?: (selectedValue: string) => void;
  name: string;

  // 스타일 커스터마이징 옵션
  groupStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  radioStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  checkedStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
  innerDotStyle?: React.CSSProperties;
}

// 라디오 그룹 컴포넌트
export const RadioGroup = (props: RadioGroupProps) => {
  const {
    options,
    defaultSelected = "",
    onChange,
    name,
    groupStyle = {},
    containerStyle = {},
    radioStyle = {},
    labelStyle = {},
    checkedStyle = {},
    disabledStyle = {},
    innerDotStyle = {},
  } = props;

  // 선택된 값을 관리하는 상태
  const [selectedValue, setSelectedValue] = useState<string>(defaultSelected);

  // 라디오 버튼 변경 핸들러
  const handleRadioChange = (value: string) => {
    setSelectedValue(value);

    // 상위 컴포넌트에 변경 알림
    if (onChange) {
      onChange(value);
    }
  };

  // 기본 그룹 스타일
  const defaultGroupStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "8px 0",
  };

  // 병합된 스타일
  const mergedGroupStyle = { ...defaultGroupStyle, ...groupStyle };

  return (
    <div
      style={mergedGroupStyle}
      role="radiogroup"
      aria-labelledby={`${name}-group`}
    >
      {options.map((option) => (
        <Radio
          key={option.id}
          option={option}
          checked={selectedValue === option.value}
          onChange={handleRadioChange}
          containerStyle={containerStyle}
          radioStyle={radioStyle}
          labelStyle={labelStyle}
          checkedStyle={checkedStyle}
          disabledStyle={disabledStyle}
          innerDotStyle={innerDotStyle}
        />
      ))}
    </div>
  );
};
