import React from "react";
import "./List.css";

const List = props => {
  return (
    <div className="List">
      <img src={props.item} alt="list_item" onClick={props.select} />
    </div>
  );
};

export default List;
