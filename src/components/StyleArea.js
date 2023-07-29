import React from "react";
import "../styles/style-area.css";

const StyleArea = ({
  styleData,
  currentStyle,
  currentType,
  face,
  setFace,
  setCurrentType,
  firstCharCap,
}) => {
  return (
    <div className="style-area">
      <p>STYLE</p>
      <div className="style-area-buttons">
        {styleData[currentStyle].map((key) => (
          <button
            key={key}
            className={currentType === key ? "selected" : "notSelected"}
            onClick={() => {
              const newFace = { ...face };
              newFace[currentStyle] = key;
              setFace(newFace);
              setCurrentType(key);
            }}
          >
            {firstCharCap(key)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleArea;
