import { ReactNode, useEffect, useRef, useState } from "react";

// 타입 정의
interface AccordionItemProps {
  title: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  onClick: () => void;
  icon?: ReactNode;

  // 인라인 스타일 객체들
  itemStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

// 아코디언 아이템 컴포넌트
export const AccordionItem = (props: AccordionItemProps) => {
  const {
    title,
    content,
    isOpen,
    onClick,
    icon,
    itemStyle = {},
    headerStyle = {},
    titleStyle = {},
    contentStyle = {},
    iconStyle = {},
  } = props;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // 콘텐츠의 실제 높이 측정
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, content]);

  // 기본 스타일들
  const defaultItemStyle: React.CSSProperties = {
    borderRadius: "0.25rem",
    marginBottom: "0.5rem",
    overflow: "hidden",
  };

  const defaultHeaderStyle: React.CSSProperties = {
    width: "100%",
    padding: "1rem",
    textAlign: "left",
    fontWeight: "500",
    backgroundColor: "#282828",
    borderBottom: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "background-color 0.2s ease",
  };

  const defaultTitleStyle: React.CSSProperties = {};

  const defaultContentStyle: React.CSSProperties = {
    padding: "1rem",
    backgroundColor: "#282828",
  };

  const defaultIconStyle: React.CSSProperties = {
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  // 기본 스타일과 사용자 정의 스타일 병합
  const mergedItemStyle = { ...defaultItemStyle, ...itemStyle };
  const mergedHeaderStyle = { ...defaultHeaderStyle, ...headerStyle };
  const mergedTitleStyle = { ...defaultTitleStyle, ...titleStyle };
  const mergedContentStyle = { ...defaultContentStyle, ...contentStyle };
  const mergedIconStyle = { ...defaultIconStyle, ...iconStyle };

  return (
    <div style={mergedItemStyle}>
      <button
        style={mergedHeaderStyle}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span style={mergedTitleStyle}>{title}</span>
        {icon || <span style={mergedIconStyle}>▼</span>}
      </button>
      <div
        style={{
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
          height: `${height}px`,
        }}
      >
        <div ref={contentRef} style={mergedContentStyle}>
          {content}
        </div>
      </div>
    </div>
  );
};
