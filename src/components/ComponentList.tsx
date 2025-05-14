import { useAtomValue } from "jotai";
import { selectComponentAtom } from "states/atom";

import {
  AccordionComponent,
  ButtonComponent,
  CalendarComponent,
  CardComponent,
  CheckBoxComponent,
  InputComponent,
  ListComponent,
  SelectComponent,
  LoadingComponent,
  MessageComponent,
  PopupComponent,
  RadioComponent,
} from "components/viewprops";

export const ComponentList = () => {
  const selectValue = useAtomValue(selectComponentAtom);

  return (
    <main className="flex flex-col gap-4 w-250 h-200 border border-neutral-500 rounded-sm py-4">
      {selectValue === "Accordion" && <AccordionComponent />}
      {selectValue === "Button" && <ButtonComponent />}
      {selectValue === "CheckBox" && <CheckBoxComponent />}
      {selectValue === "Radio" && <RadioComponent />}
      {selectValue === "Input" && <InputComponent />}
      {selectValue === "Card" && <CardComponent />}
      {selectValue === "List" && <ListComponent />}
      {selectValue === "Select" && <SelectComponent />}
      {selectValue === "Calendar" && <CalendarComponent />}
      {selectValue === "Loading" && <LoadingComponent />}
      {selectValue === "Popup" && <PopupComponent />}
      {selectValue === "Message" && <MessageComponent />}

      {/* component view */}
      {/* 
        {selectComponent === "CheckBox" && (
          <CheckboxGroup
            // 속성 row col
            options={[
              { id: "1", label: "체크박스 옵션 1", value: "option1" },
              // { id: "2", label: "체크박스 옵션 2", value: "option1" },
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
        )} */}
    </main>
  );
};
