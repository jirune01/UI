import { SettingIcon } from "assets/icons/svg/SettingIcon";
import "styles/code.css";

export const Code = () => {
  return (
    <div className="code-container">
      <div className="code-header">
        <div className="flex gap-1.5">
          <div
            className="code-header-circle"
            style={{ backgroundColor: "#F5655B" }}
          />
          <div
            className="code-header-circle"
            style={{ backgroundColor: "#F6BD3B" }}
          />
          <div
            className="code-header-circle"
            style={{ backgroundColor: "#43C645" }}
          />
        </div>
        <div>
          <SettingIcon />
        </div>
      </div>

      {/* code  */}
      <div className="code-main custom-view-scrollbar">123</div>
    </div>
  );
};
