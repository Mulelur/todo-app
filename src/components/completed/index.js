import React from "react";
import "./styles/completed.css";

export default function Completed({ children, ...restProps }) {
  return (
    <div {...restProps} className="completed">
      <div className="completed__header">
        <h3 className="completed__header-title"> Completed</h3>
      </div>
      <div className="completed__body">{children}</div>
    </div>
  );
}
