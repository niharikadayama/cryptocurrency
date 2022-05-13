import React from "react";
import "./style.scss";


const GridHeader = ({ title }) => {
  return (
    
    <div className="header">
      <p className="title">{title}</p>
    </div>
  );
};

export default GridHeader;
