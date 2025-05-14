import React, { CSSProperties, useEffect, useRef, useState } from "react";

// types
import { AccordionItemType } from "types/index";

import {
  defaultContentStyle,
  defaultHeaderStyle,
  defaultItemStyle,
  defaultTitleStyle,
} from "constants/default";

interface AccordionProps {
  item: AccordionItemType;
  defaultOpen?: boolean;
  onChangeOpen: () => void;
  icon?: React.ReactNode;
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
    defaultOpen,
    onChangeOpen,
    icon,
    containerStyle = {},
    itemStyle = {},
    headerStyle = {},
    titleStyle = {},
    contentStyle = {},
    iconStyle = {},
  } = props;

  const toggleItem = () => {
    onChangeOpen();
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // 콘텐츠의 실제 높이 측정
    if (contentRef.current) {
      setHeight(defaultOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [defaultOpen, item]);

  const defaultContainerStyle: CSSProperties = {
    width: "100%",
    maxWidth: "28rem",
    margin: "0 auto",
    padding: "1rem",
  };

  const defaultIconStyle: React.CSSProperties = {
    transform: defaultOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
    cursor: "pointer",
  };

  // 기본 스타일과 사용자 정의 스타일 병합
  const mergedContainerStyle = { ...defaultContainerStyle, ...containerStyle };
  // 기본 스타일과 사용자 정의 스타일 병합
  const mergedItemStyle = { ...defaultItemStyle, ...itemStyle };
  const mergedHeaderStyle = { ...defaultHeaderStyle, ...headerStyle };
  const mergedTitleStyle = { ...defaultTitleStyle, ...titleStyle };
  const mergedContentStyle = { ...defaultContentStyle, ...contentStyle };

  const mergedIconStyle = { ...defaultIconStyle, ...iconStyle };

  return (
    <div style={mergedContainerStyle}>
      <div style={mergedItemStyle}>
        <button
          style={mergedHeaderStyle}
          onClick={toggleItem}
          aria-expanded={defaultOpen}
        >
          <span style={mergedTitleStyle}>{item.title}</span>
          {icon ? (
            icon
          ) : (
            <span style={mergedIconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 100 100"
              >
                <rect
                  width="100"
                  height="100"
                  rx="8"
                  ry="8"
                  fill="transparent"
                />
                <path
                  d="M30 40 L50 60 L70 40"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
          {/* {icon || (
            <span style={mergedIconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 100 100"
              >
                <rect
                  width="100"
                  height="100"
                  rx="8"
                  ry="8"
                  fill="transparent"
                />
                <path
                  d="M30 40 L50 60 L70 40"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth={6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )} */}
        </button>
        <div
          style={{
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
            height: `${height}px`,
          }}
        >
          <div ref={contentRef} style={mergedContentStyle}>
            {item.content}
          </div>
        </div>
      </div>
    </div>
  );
};
