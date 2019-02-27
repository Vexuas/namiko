import React from "react";
import "./index.css";

const BottomCardTitle = props => {
  console.log(props.title);
  return <div className="bottomCardTitle">{props.title}</div>;
};

export default BottomCardTitle;
