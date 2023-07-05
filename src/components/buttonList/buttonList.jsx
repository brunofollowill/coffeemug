import React from "react";
import "../buttonList/buttonList.css";

const buttonList = ({ buttons }) => {
  
  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="container-button">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => handleClick(button.link)}>
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default buttonList;