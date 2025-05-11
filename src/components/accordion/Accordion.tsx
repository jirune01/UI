import { useState, ReactNode, CSSProperties } from "react";
import { AccordionItem } from "components/accordion/item/AccordionItem";

interface AccordionItemType {
  title: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
}

interface AccordionProps {
  item: AccordionItemType;
  defaultOpen?: boolean;
  // 인라인 스타일 객체들
  containerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  iconStyle?: CSSProperties;
}

// 메인 아코디언 컴포넌트
export const Accordion = (props: AccordionProps) => {
  const {
    item,
    defaultOpen = false,
    containerStyle = {},
    itemStyle = {},
    headerStyle = {},
    titleStyle = {},
    contentStyle = {},
    iconStyle = {},
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const toggleItem = () => {
    setIsOpen((prev) => !prev);
  };

  const defaultContainerStyle: CSSProperties = {
    width: "100%",
    maxWidth: "28rem",
    margin: "0 auto",
    padding: "1rem",
  };

  // 기본 스타일과 사용자 정의 스타일 병합
  const mergedContainerStyle = { ...defaultContainerStyle, ...containerStyle };

  return (
    <div style={mergedContainerStyle}>
      <AccordionItem
        title={item.title}
        content={item.content}
        isOpen={isOpen}
        onClick={toggleItem}
        icon={item.icon}
        itemStyle={itemStyle}
        headerStyle={headerStyle}
        titleStyle={titleStyle}
        contentStyle={contentStyle}
        iconStyle={iconStyle}
      />
    </div>
  );
};
