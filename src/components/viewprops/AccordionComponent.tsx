import { useState } from "react";

// components
import { Accordion, AccordionProps } from "components/accordion";

import { AccordionItemType } from "types/index";

export const AccordionComponent = () => {
  const [defaultOpen, setDefaultOpen] = useState<boolean>(false);

  const [item, setItem] = useState<AccordionItemType>({
    title: "title",
    content: "content",
  });

  const onChangeTitle = (title: string) => {
    setItem({
      title,
      content: item.content,
    });
  };

  const onChangeContent = (content: string) => {
    setItem({
      title: item.title,
      content,
    });
  };

  const onChangeDefaultOpen = () => {
    setDefaultOpen(!defaultOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-75">
        <Accordion
          item={item}
          defaultOpen={defaultOpen}
          onChangeOpen={onChangeDefaultOpen}
        />
      </div>
      <div className="w-full h-75 border">
        <AccordionProps
          defaultOpen={defaultOpen}
          onChangeOpen={onChangeDefaultOpen}
          item={item}
          onChangeTitle={onChangeTitle}
          onChangeContent={onChangeContent}
        />
      </div>
    </div>
  );
};
