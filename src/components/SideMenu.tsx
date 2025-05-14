import { useState } from "react";

// state
import { useSetAtom } from "jotai";
import { selectComponentAtom } from "states/atom";

// define
import { COMPONENT_MENU_LIST, NO_COMPONENT_MENU_LIST } from "constants/define";

// assets
import { ArrowDown } from "assets/icons/svg/ArrowDown";
import { FileIcon } from "assets/icons/svg/FileIcon";

export const SideMenu = () => {
  const setSelectComponent = useSetAtom(selectComponentAtom);

  const onSelectComponent = (value: string) => {
    setSelectComponent(value);
  };

  const [isComponentOptionOpen, setIsComponentOptionOpen] =
    useState<boolean>(false);

  const [isNoComponentOptionOpen, setIsNoComponentOptionOpen] =
    useState<boolean>(false);

  const onClickComponentOption = () => {
    setIsComponentOptionOpen(!isComponentOptionOpen);
  };

  const onClickNoComponentOption = () => {
    setIsNoComponentOptionOpen(!isNoComponentOptionOpen);
  };

  return (
    <div className="w-75 h-full p-4 bg-black/30 overflow-y-auto">
      <h4 className="mt-4 text-xl">Ui lib</h4>
      <ul className="flex flex-col gap-4 mt-6">
        <li
          className="flex items-center gap-1 cursor-pointer "
          onClick={() => {
            onClickComponentOption();
          }}
        >
          <span
            className={`transition-transform duration-300 ease-in-out ${
              isComponentOptionOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDown size={20} />
          </span>
          <FileIcon />
          <p className="no-select">Component</p>
        </li>
        {isComponentOptionOpen &&
          COMPONENT_MENU_LIST.map((v) => {
            return (
              <li
                className="flex items-center px-4 gap-1 cursor-pointer duration-300 ease-in-out"
                onClick={() => {
                  onSelectComponent(v.value);
                }}
              >
                <span style={{ transform: "rotate(270deg)" }}>
                  <ArrowDown size={20} />
                </span>
                <FileIcon />
                <p className="no-select">{v.value}</p>
              </li>
            );
          })}
      </ul>

      <ul className="flex flex-col gap-4 mt-6">
        <li
          className="flex items-center gap-1 cursor-pointer "
          onClick={() => {
            onClickNoComponentOption();
          }}
        >
          <span
            className={`transition-transform duration-300 ease-in-out ${
              isNoComponentOptionOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ArrowDown size={20} />
          </span>
          <FileIcon />
          <p className="no-select">No Component</p>
        </li>
        {isNoComponentOptionOpen &&
          NO_COMPONENT_MENU_LIST.map((v) => {
            return (
              <li
                className="flex items-center px-4 gap-1 cursor-pointer duration-300 ease-in-out"
                onClick={() => {
                  onSelectComponent(v.value);
                }}
              >
                <span style={{ transform: "rotate(270deg)" }}>
                  <ArrowDown size={20} />
                </span>
                <FileIcon />
                <p className="no-select">{v.value}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
