import { useState } from "react";

const TooltipPage = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const handleToolTip = () => {
    setIsTooltipOpen(!isTooltipOpen)
  }
  return (
    <div style={{minHeight: "100vh"}}>
      <div className="tooltip-wrap">
        <div
          className="tooltip-btn"
          onMouseEnter={handleToolTip}
          onMouseLeave={handleToolTip}
        >
          T
        </div>
        <div
          className="tooltip"
          style={{ display: isTooltipOpen ? "block" : "none" }}
        >
          tooltip 입니다.
        </div>
      </div>
    </div>
  );
};

export default TooltipPage;