import { SideMenu } from "components/SideMenu";
import { Code } from "components/Code";

import { useAtomValue } from "jotai";
import { selectComponentAtom } from "states/atom";

import { Accordion } from "components/accordion/Accordion";
import { CheckboxGroup } from "components/checkbox/CheckBoxGroup";
import { RadioGroup } from "components/radio/RadioGroup";

export const App = () => {
  const selectComponent = useAtomValue(selectComponentAtom);

  return (
    <div className="w-screen h-screen flex items-center justify-between ">
      <SideMenu />
      <main className="flex flex-col gap-4 w-250 h-200 border border-neutral-500 rounded-sm p-4">
        {/* component view */}
        <div className="flex items-center justify-center w-full h-75 border">
          {selectComponent === "Accordion" && (
            <Accordion item={{ title: "title", content: "content" }} />
          )}
          {selectComponent === "CheckBox" && (
            <CheckboxGroup
              // 속성 row col
              options={[
                { id: "1", label: "체크박스 옵션 1", value: "option1" },
                { id: "2", label: "체크박스 옵션 2", value: "option1" },
              ]}
            />
          )}
          {selectComponent === "Radio" && (
            <RadioGroup
              name={"radioTest"}
              options={[
                { id: "rb1", label: "라디오 옵션 1", value: "option1" },
                { id: "rb2", label: "라디오 옵션 2", value: "option2" },
                {
                  id: "rb3",
                  label: "비활성화된 옵션",
                  value: "option3",
                  disabled: true,
                },
                {
                  id: "rb4",
                  label: (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: "#ed8936",
                          marginRight: "8px",
                        }}
                      ></span>
                      커스텀 레이블
                    </div>
                  ),
                  value: "option4",
                },
              ]}
            />
          )}
          {selectComponent === "Input" && (
            <Accordion item={{ title: "title", content: "content" }} />
          )}
          {selectComponent === "Select" && (
            <Accordion item={{ title: "title", content: "content" }} />
          )}
          {selectComponent === "Loading" && (
            <Accordion item={{ title: "title", content: "content" }} />
          )}
        </div>
        {/* component props */}
        <div className="w-full h-75 border">Component Props</div>
      </main>
      {/* code */}
      <Code />
    </div>
  );
};
