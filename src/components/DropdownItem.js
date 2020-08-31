import React from "react";

const DropdownItem = (props) => {
  return (
    <a href="#" className="menu-item">
      <span className="icon-button">{props.leftIcon}</span>
      {props.children}
      <span className="icon-button">{props.rightIcon}</span>
    </a>
  );
};

export default DropdownItem;
