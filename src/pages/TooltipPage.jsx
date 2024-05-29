import { useEffect, useState } from "react";

const TooltipPage = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const handleToolTip = () => {
    setIsTooltipOpen(!isTooltipOpen)
  }

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "툴팁 페이지";
  }, []);
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