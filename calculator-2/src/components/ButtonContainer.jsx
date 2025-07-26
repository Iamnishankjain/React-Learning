import React from 'react';
import Button from './Button';
function ButtonContainer(props) {
    const fields = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="btn-container">
        {fields.map((f) => (
          <Button key={f} field={f} onClickButton={()=>props.onButtonClick(f)}></Button>
        ))}
    </div>
  )
}

export default ButtonContainer;
