import React, { useState } from "react";

const ButtonWithHover = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="hover-button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`button-container ${hover ? "hovered" : ""}`}>
        <div className="circle">
          <span className="icon">{hover ? "●" : "→"}</span>
        </div>
        <span className="text">{hover ? "MENUS" : ""}</span>
      </div>
    </div>
  );
};

export default ButtonWithHover;
