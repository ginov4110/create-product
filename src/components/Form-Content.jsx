import React from "react";

export default function FormContent({ children }) {
  return (
    <div className="row">
      <div className="col-2"></div>
      <div className="col-8">{children}</div>
      <div className="col-2"></div>
    </div>
  );
}
