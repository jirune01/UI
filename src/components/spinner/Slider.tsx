interface SliderProps {
  value: number | string;
  onChange: (value: number | string) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  unit?: string;
  className?: string;
  disabled?: boolean;
}
// 슬라이더 컴포넌트
export const Slider = (props: SliderProps) => {
  const { value, onChange, min, max, step, label, unit = "" } = props;
  return (
    <div className="flex items-center mb-3">
      <span className="w-32 text-sm font-medium">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-40 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <span className="ml-3 text-sm text-gray-600">
        {value}
        {unit}
      </span>
    </div>
  );
};
