import React from "react";

// 스피너 컴포넌트의 속성 타입 정의
interface SpinnerProps {
  size?: number; // 스피너의 크기 (픽셀)
  color?: string; // 스피너의 색상
  speed?: number; // 스피너의 회전 속도 (초)
  thickness?: number; // 스피너의 두께
  bgColor?: string; // 배경 원 색상
  arcSize?: number; // 회전하는 호(arc)의 크기 (0-1 사이, 1은 완전한 원)
}

export const Spinner = (props: SpinnerProps) => {
  const {
    size = 40,
    color = "#1976d2",
    speed = 1.4,
    thickness = 5.6,
    bgColor = "#e0e0e0",
    arcSize = 0.5, // 호의 크기 (전체 원의 25%)
  } = props;

  // 스타일 계산
  const spinnerStyle: React.CSSProperties = {
    width: `${size * 4}px`,
    height: `${size * 4}px`,
    position: "relative",
    display: "inline-block",
  };

  const circleRadiusValue = (size * 4 - thickness * 2) / 2;
  const circumference = 2 * Math.PI * circleRadiusValue;
  const arcLength = circumference * arcSize; // 호의 길이
  const dashArray = `${arcLength} ${circumference - arcLength}`; // strokeDasharray 값

  // keyframes 스타일 정의
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div className="custom-spinner" style={spinnerStyle}>
      <style>{keyframes}</style>

      {/* 배경 원 - 항상 보이는 부분 */}
      <svg style={{ width: "100%", height: "100%" }}>
        <circle
          cx={(size * 4) / 2}
          cy={(size * 4) / 2}
          r={circleRadiusValue}
          fill="none"
          stroke={bgColor}
          strokeWidth={thickness}
        />
      </svg>

      {/* 애니메이션 원 - 회전하는 부분 */}
      <svg
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          animation: `spin ${speed}s linear infinite`,
          transformOrigin: "center",
        }}
        viewBox={`0 0 ${size * 4} ${size * 4}`}
      >
        <circle
          cx={(size * 4) / 2}
          cy={(size * 4) / 2}
          r={circleRadiusValue}
          fill="none"
          strokeWidth={thickness}
          stroke={color}
          strokeLinecap="round"
          strokeDasharray={dashArray}
        />
      </svg>
    </div>
  );
};
