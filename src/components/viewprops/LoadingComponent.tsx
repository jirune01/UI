import { useState } from "react";

import { isEqual } from "es-toolkit";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Slider } from "components/spinner/Slider";
import { Spinner } from "components/spinner/Spinner";

// 스피너 컴포넌트의 속성 타입 정의
interface SpinnerProps {
  size?: number; // 스피너의 크기 (픽셀)
  color?: string; // 스피너의 색상
  speed?: number; // 스피너의 회전 속도 (초)
  thickness?: number; // 스피너의 두께
  bgColor?: string; // 배경 원 색상
  arcSize?: number; // 회전하는 호(arc)의 크기 (0-1 사이, 1은 완전한 원)
}

export const LoadingComponent = () => {
  // 스피너 속성 상태 관리
  const [spinnerProps, setSpinnerProps] = useState<SpinnerProps>({
    size: 40,
    color: "#1976d2",
    speed: 1.4,
    thickness: 5.6,
    bgColor: "#e0e0e0",
    arcSize: 0.5,
  });

  // 개별 속성 업데이트 핸들러
  const updateProperty = (key: keyof SpinnerProps, value: any) => {
    setSpinnerProps((prev) => ({ ...prev, [key]: value }));
  };

  // 미리 정의된 프리셋
  const presets = [
    {
      name: "파란색 기본형",
      props: {
        size: 40,
        color: "#1976d2",
        speed: 1.4,
        thickness: 5.6,
        bgColor: "#e0e0e0",
        arcSize: 0.5,
      },
    },
    {
      name: "빠른 빨간색",
      props: {
        size: 35,
        color: "#f44336",
        speed: 0.8,
        thickness: 4,
        bgColor: "#ffcdd2",
        arcSize: 0.7,
      },
    },
    {
      name: "얇은 녹색",
      props: {
        size: 45,
        color: "#4caf50",
        speed: 1.6,
        thickness: 3,
        bgColor: "#c8e6c9",
        arcSize: 0.3,
      },
    },
  ];

  // 프리셋 버튼 클릭 핸들러
  const applyPreset = (preset: SpinnerProps) => {
    setSpinnerProps(preset);
  };

  return (
    <div>
      <div className="flex h-85 border-b-2 border-neutral-500">
        <div className="flex items-center justify-center  w-full">
          <Spinner {...spinnerProps} />
        </div>
      </div>
      <div className="w-full p-4 h-85">
        <h3 className="text-xl">스피너 속성 컨트롤</h3>
        <div>
          <h4 className="my-3">프레셋</h4>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, idx) => {
              console.log(preset.props);
              console.log(spinnerProps);
              {
                return (
                  <button
                    key={idx}
                    onClick={() => applyPreset(preset.props)}
                    className={`px-4 py-2 text-white  border border-neutral-500 
                  hover:bg-neutral-500 rounded cursor-pointer text-sm transition
                 ${isEqual(preset.props, spinnerProps) ? "bg-neutral-400" : ""}
                  `}
                  >
                    {preset.name}
                  </button>
                );
              }
            })}
          </div>
        </div>

        <div className="flex flex-col my-4">
          <h4 className="text-xl">속성</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Slider
              label="크기 (Size)"
              value={spinnerProps.size as number}
              onChange={(value) => updateProperty("size", value)}
              min={10}
              max={80}
              step={1}
              unit="px"
            />

            <Slider
              label="두께 (Thickness)"
              value={spinnerProps.thickness as number}
              onChange={(value) => updateProperty("thickness", value)}
              min={1}
              max={15}
              step={0.5}
            />

            <Slider
              label="속도 (Speed)"
              value={spinnerProps.speed as number}
              onChange={(value) => updateProperty("speed", value)}
              min={0.1}
              max={5}
              step={0.1}
              unit="s"
            />
            <Slider
              label="호 크기 (Arc Size)"
              value={spinnerProps.arcSize as number}
              onChange={(value) => updateProperty("arcSize", value)}
              min={0.1}
              max={0.9}
              step={0.05}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
