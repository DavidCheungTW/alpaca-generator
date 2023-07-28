import "../styles/app.css";
import { useState, useRef } from "react";
import { BiSave } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import { toPng } from "html-to-image";

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

  Object.keys(styleData).map((key) => {
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
  const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck } = face;
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
    <div className="App" ref={elementRef}>
      <h1>ALPACA GENERATOR</h1>
      <div className="container">
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
        <div className="accessorize-area">
          <p>ACCESSORIZE THE ALPACAS</p>
          {Object.keys(styleData).map((key) => (
            <button
              key={key}
              className={currentStyle === key ? "selected" : "notSelected"}
              onClick={() => {
                setCurrentStyle(key);
                setCurrentType("default");
              }}
            >
              {firstCharCap(key)}
            </button>
          ))}
        </div>
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

        {backgrounds !== "clear" && (
          <div className="picture-area">
            <img
              className="backgrounds"
              src={`/images/alpaca/backgrounds/${backgrounds}.png`}
              alt="backgrounds.png"
            />
          </div>
        )}

        <div className="picture-area">
          <img
            className="ears"
            src={`/images/alpaca/ears/${ears}.png`}
            alt="ears.png"
          />
        </div>
        <div className="picture-area">
          <img
            className="neck"
            src={`/images/alpaca/neck/${neck}.png`}
            alt="neck.png"
          />
        </div>
        <div className="picture-area">
          <img className="nose" src="/images/alpaca/nose.png" alt="nose.png" />
        </div>

        <div className="picture-area">
          <img
            className="hair"
            src={`/images/alpaca/hair/${hair}.png`}
            alt="hair.png"
          />
        </div>
        {accessories !== "clear" && (
          <div className="picture-area">
            <img
              className="accessories"
              src={`/images/alpaca/accessories/${accessories}.png`}
              alt="accessories.png"
            />
          </div>
        )}
        <div className="picture-area">
          <img
            className="leg"
            src={`/images/alpaca/leg/${leg}.png`}
            alt="leg.png"
          />
        </div>

        <div className="picture-area">
          <img
            className="eyes"
            src={`/images/alpaca/eyes/${eyes}.png`}
            alt="eyes.png"
          />
        </div>

        <div className="picture-area">
          <img
            className="mouth"
            src={`/images/alpaca/mouth/${mouth}.png`}
            alt="mouth.png"
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
