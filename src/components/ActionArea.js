import React from "react";
import { BiSave } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import "../styles/action-area.css";

const ActionArea = ({ randomFace, htmlToImageConvert, styleData, setFace }) => {
  return (
    <div className="action-area">
      <button onClick={() => randomFace(styleData, setFace)}>
        <FaRandom />
        Random
      </button>
      <button onClick={htmlToImageConvert}>
        <BiSave />
        Download
      </button>
    </div>
  );
};

export default ActionArea;
