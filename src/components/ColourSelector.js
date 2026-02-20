import React from "react";
import "../styles/Child.css";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, classname, key } = config;
  return (
    <button
      data-testid={key}
      className={classname}
      onClick={() => selectNextBackground({ background: background })}
    >
      {label}
    </button>
  );
};
export default ColourSelector;
