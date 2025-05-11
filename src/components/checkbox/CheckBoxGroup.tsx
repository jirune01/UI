import { useState } from "react";
import { CheckBox, CheckboxOption } from "./CheckBox";

// 체크박스 그룹 Props
interface CheckboxGroupProps {
  options: CheckboxOption[];
  defaultSelected?: string[];
  onChange?: (selectedValues: string[]) => void;

  // 스타일 커스터마이징 옵션
  groupStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  checkedStyle?: React.CSSProperties;
  disabledStyle?: React.CSSProperties;
}

// 체크박스 그룹 컴포넌트
export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    options,
    defaultSelected = [],
    onChange,
    groupStyle = {},
    containerStyle = {},
    checkboxStyle = {},
    labelStyle = {},
    checkedStyle = {},
    disabledStyle = {},
  } = props;

  // 선택된 값들을 관리하는 상태
  const [selectedValues, setSelectedValues] =
    useState<string[]>(defaultSelected);

  // 체크박스 변경 핸들러
  const handleCheckboxChange = (value: string, checked: boolean) => {
    let newSelectedValues: string[];

    if (checked) {
      // 체크된 경우 추가
      newSelectedValues = [...selectedValues, value];
    } else {
      // 체크 해제된 경우 제거
      newSelectedValues = selectedValues.filter((val) => val !== value);
    }

    setSelectedValues(newSelectedValues);

    // 상위 컴포넌트에 변경 알림
    if (onChange) {
      onChange(newSelectedValues);
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
    <div style={mergedGroupStyle}>
      {options.map((option) => (
        <CheckBox
          key={option.id}
          option={option}
          checked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange}
          containerStyle={containerStyle}
          checkboxStyle={checkboxStyle}
          labelStyle={labelStyle}
          checkedStyle={checkedStyle}
          disabledStyle={disabledStyle}
        />
      ))}
    </div>
  );
};
