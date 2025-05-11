import { useAtom } from "jotai";
import { selectComponentAtom } from "states/atom";

import { COMPONENT_MENU_LIST } from "constants/define";

export const SideMenu = () => {
  const [selectComponent, setSelectComponent] = useAtom(selectComponentAtom);
  // console.log(selectComponent, "selectComponent");

  const onSelectComponent = (value: string) => {
    setSelectComponent(value);
  };

  return (
    <div className="w-45 h-150 p-4 border border-l-0 rounded-t-lg border-neutral-500 overflow-y-auto">
      <ul>
        {COMPONENT_MENU_LIST.map((v) => {
          return (
            <li
              key={v.value}
              className="px-4 py-2 cursor-pointer"
              onClick={() => {
                onSelectComponent(v.value);
              }}
            >
              {v.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
