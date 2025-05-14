import { Select } from "components/select/Select";
import { SelectProps } from "components/select/SelectProps";
import { useState } from "react";

export const SelectComponent = () => {
  const defaultOption = [
    { label: "옵션 1", value: "옵션 1" },
    { label: "옵션 2", value: "옵션 2" },
    { label: "옵션 3", value: "옵션 3" },
    { label: "옵션 4", value: "옵션 4" },
    { label: "옵션 5", value: "옵션 5" },
  ];

  const [selectOption, setSelectOption] = useState<string>("옵션 1");

  const onChangeOption = (newOption: string) => {
    setSelectOption(newOption);
  };

  return (
    <div>
      <div className="flex h-85 border-b-2 border-neutral-500">
        <div className="flex items-center justify-center w-full">
          <Select
            options={defaultOption}
            value={selectOption}
            onChange={onChangeOption}
          />
        </div>
      </div>

      <SelectProps />
    </div>
  );
};
