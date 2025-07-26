import Input from "./Input";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

function Interface() {
  const [displayCalVal, setCalVal]=useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    }else if(buttonText === '='){
      setCalVal(eval(displayCalVal));
    }else{
      let newDisplayVal = displayCalVal+buttonText;
      setCalVal(newDisplayVal);
    }
  }
  return (
    <div className="main-div">
      <Input displayCalVal={displayCalVal}></Input>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default Interface;
