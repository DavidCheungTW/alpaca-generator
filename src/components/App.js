import "../styles/app.css";
import { useState, useRef } from "react";
import { toPng } from "html-to-image";
import ActionArea from "./ActionArea";
import AccessorizeArea from "./AccessorizeArea";
import StyleArea from "./StyleArea";
import PictureArea from "./PictureArea";

const firstCharCap = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const randomFace = (styleData, setFace) => {
  const newFace = {
    hair: "",
    ears: "",
    eyes: "",
    mouth: "",
    neck: "",
    leg: "",
    accessories: "",
    backgrounds: "",
  };

  Object.keys(styleData).forEach((key) => {
    const arrayLen = styleData[key].length;
    const randomIndex = Math.floor(Math.random() * arrayLen);
    newFace[key] = styleData[key][randomIndex];
  });

  setFace(newFace);
  return;
};

const App = () => {
  const [face, setFace] = useState(initFace);
  const [currentStyle, setCurrentStyle] = useState("hair");
  const [currentType, setCurrentType] = useState("default");
  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "my-image-name.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="app-title">
        <h1>ALPACA GENERATOR</h1>
      </div>

      <div className="container">
        <div className="left-side">
          <div ref={elementRef}>
            <PictureArea face={face} />
          </div>
          <ActionArea
            randomFace={randomFace}
            htmlToImageConvert={htmlToImageConvert}
            styleData={styleData}
            setFace={setFace}
          />
        </div>
        <div className="right-side">
          <AccessorizeArea
            styleData={styleData}
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
            setCurrentType={setCurrentType}
            face={face}
            firstCharCap={firstCharCap}
          />
          <StyleArea
            styleData={styleData}
            currentStyle={currentStyle}
            currentType={currentType}
            face={face}
            setFace={setFace}
            setCurrentType={setCurrentType}
            firstCharCap={firstCharCap}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

const initFace = {
  hair: "default",
  ears: "default",
  eyes: "default",
  mouth: "default",
  neck: "default",
  leg: "default",
  accessories: "clear",
  backgrounds: "clear",
};

const styleData = {
  hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
  ears: ["default", "tilt-backward", "tilt-forward"],
  eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
  mouth: ["default", "astonished", "eating", "laugh", "tongue"],
  neck: ["default", "bend-backward", "bend-forward", "thick"],
  leg: [
    "default",
    "bubble-tea",
    "cookie",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  accessories: ["clear", "earings", "flower", "glasses", "headphone"],
  backgrounds: [
    "clear",
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "grey40",
    "grey70",
    "grey80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
};
