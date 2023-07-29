import React from "react";
import "../styles/accessorize-area.css";

const AccessorizeArea = ({
  styleData,
  currentStyle,
  setCurrentStyle,
  setCurrentType,
  face,
  firstCharCap,
}) => {
  return (
    <div className="accessorize-area">
      <p>ACCESSORIZE THE ALPACAS</p>
      {Object.keys(styleData).map((key) => (
        <button
          key={key}
          className={currentStyle === key ? "selected" : "notSelected"}
          onClick={() => {
            setCurrentStyle(key);
            setCurrentType(face[key]);
          }}
        >
          {firstCharCap(key)}
        </button>
      ))}
    </div>
  );
};

export default AccessorizeArea;
