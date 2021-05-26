import React from "react";
import "./styles/notCompleted.css";

export default function NotCompleted({ children, ...restProps }) {
  return (
    <div {...restProps} className="notCompleted">
      <div className="notCompleted__header">
        <h3 className="notCompleted__header-title">Current</h3>
      </div>
      <div className="notCompleted__body">{children}</div>
    </div>
  );
}
