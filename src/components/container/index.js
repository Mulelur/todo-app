import React from "react";
import "./styles/container.css";

export default function Container({ children, ...restProps }) {
  return (
    <div {...restProps} className="container">
      {children}
    </div>
  );
}
