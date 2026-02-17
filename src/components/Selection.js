import React, { useState } from "react";
import "../styles/Child.css";
import "../styles/App.css";

const Selection = ({ item, applyColor }) => {
   const [style,setStyle] = useState({background:''})
  console.log(item);
  return (
    <div className="fix-box subheading" style={style} onClick={() => applyColor(setStyle)}>
      {item}
    </div>
  );
};

export default Selection;
