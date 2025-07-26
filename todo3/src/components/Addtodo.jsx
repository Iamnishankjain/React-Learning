import 'bootstrap/dist/css/bootstrap.min.css'
import style from './CSS/Addtodo.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';

function Addtodo(props){

  const [takeItemName,setItemName] = useState("");
  const [takeItemDate,setItemDate] = useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  }
  const handleDateChange = (event) => {
    setItemDate(event.target.value);
  }

  const handleAddItemButton =() => {
    props.onNewItem(takeItemName,takeItemDate);
    setItemName("");
    setItemDate("");
  }

  return (
      <div className="container text-center">
      <div className="row">
        <div className="col-6"><input type="text" value={takeItemName} placeholder="Enter Todo here" onChange={handleNameChange}/></div>
        <div className="col-4"><input type="date" value={takeItemDate} onChange={handleDateChange}/></div>
        <div className="col-2">
          <button
           type="button" className={`btn btn-success ${style["custom-add-btn"]}`}
          onClick={handleAddItemButton}>
            <IoIosAddCircle style={{fontSize:"1.5rem"}}/></button>
          </div>
      </div>
      </div>
  );
}

export default Addtodo;