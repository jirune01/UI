interface ToggleSwitchPropsType {
  isOn: boolean;
  toggleSwitch: () => void;
  offText?: string;
  onText?: string;
  width?: string;
  height?: string;
  circleSize?: string;
  onColor?: {
    from: string;
    to: string;
  };
  offColor?: {
    from: string;
    to: string;
  };
  textPosition?: {
    on: string;
    off: string;
  };
}

export const ToggleSwitch = (props: ToggleSwitchPropsType) => {
  const {
    isOn,
    toggleSwitch,
    offText = "On",
    onText = "Off",
    width = "w-16",
    height = "h-5",
    circleSize = "w-7 h-7",
    // onColor = { from: "#4ade80", to: "#22c55e" },
    // offColor = { from: "#f87171", to: "#ef4444" },
  } = props;

  return (
    <button
      className={`relative ${width} ${height} 
      ${isOn ? "bg-neutral-400" : "bg-blue-400"}
      rounded-full  shadow-md flex items-center cursor-pointer transition-all duration-300 ease-in-out`}
      onClick={toggleSwitch}
      aria-pressed={isOn}
    >
      <div
        className={`absolute w-10 text-gray-400 text-xs font-medium transition-opacity ${!isOn ? "opacity-100 left-2/3 -translate-x-1/2" : "opacity-0"}`}
      >
        {offText}
      </div>

      <div
        className={`absolute w-10 text-gray-400 text-xs font-medium transition-opacity ${isOn ? "opacity-100 left-1/3  -translate-x-1/2" : "opacity-0"}`}
      >
        {onText}
      </div>

      <div
        className={`absolute ${circleSize} rounded-full shadow-sm 
          transition-all duration-300 ease-in-out 
          ${isOn ? "right-0" : "left-0"}
        `}
        style={{
          background: isOn
            ? `linear-gradient(to bottom right, #A3A3A3, #A3A3A3)`
            : `linear-gradient(to bottom right, #93C5FD, #60A5FA)`,
          // ? `linear-gradient(to bottom right, #A3A3A3, #A3A3A3)`
          // : `linear-gradient(to bottom right, #93C5FD, #60A5FA)`,
        }}
      />
    </button>
  );
};
