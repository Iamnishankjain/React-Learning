import 'bootstrap/dist/css/bootstrap.min.css'
import style from './CSS/Addtodo.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { useRef, useState } from 'react';

function Addtodo(props){

  const todoNameElement = useRef("");
  const todoDateElement = useRef("");
  

  const handleAddItemButton =(event) => {
    event.preventDefault();         //submit the code but maintain default behaviour
    const takeItemName=todoNameElement.current.value;
    const takeItemDate=todoDateElement.current.value;
    props.onNewItem(takeItemName,takeItemDate);
    todoNameElement.current.value="";
    todoDateElement.current.value="";
  }

  return (
      <div className="container text-center">
      <form onSubmit={handleAddItemButton} className="row">
        <div className="col-6"><input ref={todoNameElement} type="text" placeholder="Enter Todo here"/></div>
        <div className="col-4"><input ref={todoDateElement} type="date" /></div>
        <div className="col-2">
          <button className={`btn btn-success ${style["custom-add-btn"]}`}>
            <IoIosAddCircle style={{fontSize:"1.5rem"}}/></button>
          </div>
      </form>
      </div>
  );
}

export default Addtodo;