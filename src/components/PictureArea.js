import React from "react";
import "../styles/picture-area.css";

const PictureArea = ({ face }) => {
  const { accessories, backgrounds, ears, eyes, hair, leg, mouth, neck } = face;

  return (
    <div className="picture-area">
      {backgrounds !== "clear" && (
        <img
          className="backgrounds"
          src={`/images/alpaca/backgrounds/${backgrounds}.png`}
          alt="backgrounds.png"
        />
      )}
      <img
        className="ears"
        src={`/images/alpaca/ears/${ears}.png`}
        alt="ears.png"
      />
      <img
        className="neck"
        src={`/images/alpaca/neck/${neck}.png`}
        alt="neck.png"
      />
      <img className="nose" src="/images/alpaca/nose.png" alt="nose.png" />
      <img
        className="hair"
        src={`/images/alpaca/hair/${hair}.png`}
        alt="hair.png"
      />
      {accessories !== "clear" && (
        <img
          className="accessories"
          src={`/images/alpaca/accessories/${accessories}.png`}
          alt="accessories.png"
        />
      )}
      <img
        className="leg"
        src={`/images/alpaca/leg/${leg}.png`}
        alt="leg.png"
      />
      <img
        className="eyes"
        src={`/images/alpaca/eyes/${eyes}.png`}
        alt="eyes.png"
      />
      <img
        className="mouth"
        src={`/images/alpaca/mouth/${mouth}.png`}
        alt="mouth.png"
      />
    </div>
  );
};

export default PictureArea;
