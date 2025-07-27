import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterAction } from '../store';

const Controls = () => {
  const dispatch=useDispatch();
  const inputValue=useRef();

  const handleIncrement=()=>{
    dispatch(counterAction.increment());
  }

  const handleDecrement=()=>{
    dispatch(counterAction.decrement());
  };

  const handlePrivacyToggle=()=>{
    dispatch({type: "PrivacyToggle"});
  }

  const handleAdd=()=>{
    dispatch(counterAction.add(inputValue.current.value));
    inputValue.current.value="";
  };
  const handleSub=()=>{
    dispatch(counterAction.sub(inputValue.current.value));
    inputValue.current.value="";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" onClick={handleIncrement} className="btn btn-primary btn-lg px-4 gap-3">Increment</button>
        <button type="button" onClick={handleDecrement} className="btn btn-success btn-lg px-4">Decrement</button>
        <button type="button" onClick={handlePrivacyToggle} className="btn btn-warning btn-lg px-4">Privacy Toggle</button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
        <input type="number" placeholder='Enter Number' ref={inputValue}/>
        <button type="button"  onClick={handleAdd} className="btn btn-info btn-lg px-4 gap-3">Add</button>
        <button type="button"  onClick={handleSub} className="btn btn-danger btn-lg px-4">Subtract</button>
      </div>
    </>
  )
}

export default Controls
