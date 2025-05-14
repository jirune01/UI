import { ToggleSwitch } from "components/common/ToggleSwitch";
import { AccordionItemType } from "types/index";

interface AccordionPropsType {
  defaultOpen: boolean;
  onChangeOpen: () => void;
  item: AccordionItemType;
  onChangeTitle: (title: string) => void;
  onChangeContent: (content: string) => void;
}

export const AccordionProps = (props: AccordionPropsType) => {
  const { defaultOpen, onChangeOpen, item, onChangeTitle, onChangeContent } =
    props;

  return (
    <div className="w-full h-full flex flex-wrap gap-5 p-4 border ">
      <div className="flex flex-col gap-4 items-center justify-center h-18">
        <label>default Open</label>
        <ToggleSwitch
          isOn={!defaultOpen}
          toggleSwitch={() => {
            onChangeOpen?.();
          }}
          onText="Close"
          offText="Open"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center h-18">
        <label>Title</label>
        <input
          className="w-40 rounded px-2 border border-neutral-400"
          value={item.title}
          onChange={(e) => {
            const value = e.target.value;
            onChangeTitle(value);
          }}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center h-30">
        <label>Content</label>
        <textarea
          value={item.content}
          className="w-72 min-h-20 max-h-20 rounded p-2 border border-neutral-400 resize-none"
          onChange={(e) => {
            const value = e.target.value;
            onChangeContent(value);
          }}
        />
      </div>
      {/* style */}
      {/* 속성 소개 할 것 */}
    </div>
  );
};
