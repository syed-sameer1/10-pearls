import React from "react";
import "./View.css";

const View = props => {
  return (
    <div className="View">
      <img src={props.view} alt="main_view" />
    </div>
  );
};

export default View;
