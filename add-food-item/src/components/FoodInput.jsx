import style from "./FoodInput.module.css";

import React from "react";

function FoodInput(props) {
  return (
    <input type="text" 
    placeholder="Enter food item" 
    className={style.input} 
    onKeyDown={props.handleOnKeyDown}
    />
  );
}

export default FoodInput;
