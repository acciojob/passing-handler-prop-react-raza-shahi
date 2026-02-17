import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({ item, applyColor }) => {
   const [style,setStyle] = useState({background:''})
  return (
    <div className="fix-box subheading" style={style} onClick={() => applyColor(setStyle)}>
      {item}
    </div>
  );
};

export default Selection;
