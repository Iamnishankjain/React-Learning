import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoAllItems from "./components/TodoAllItems";
import WelcomeMsgError from "./components/WelcomeMsgError";
import { useState } from "react";
function App() {
  let [todoItems,setTodoItems]=useState([]);

// --------------------------------------------------------------------------------------------------------------------------------------
  // const handleNewItem = (itemName,itemDate) => {
  //   const newTodoItem = [...todoItems,{name: itemName,date: itemDate}];
  //   setTodoItems(newTodoItem);
  // };

  // const handleNewItem = (itemName,itemDate) => {
  //   setTodoItems((currValue)=>{
  //     const newTodoItem = [...currValue,{name: itemName,date: itemDate}];
  //     return newTodoItem;
  //   });
  // };


  // Short method  //It is known as Functional update

  const handleNewItem = (itemName,itemDate) => {
    setTodoItems((currValue)=>[...currValue,{name: itemName,date: itemDate},]);      //if many changes in values due to asynchronous behaviour so it check current value and update in the current value         
  };

// ----------------------------------------------------------------------------------------------------------------------------------------

  const handleDeleteItem = (itemName,itemDate) =>{
    const newTodoItem = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo onNewItem={handleNewItem}></Addtodo>
      {todoItems.length ==0 && <WelcomeMsgError/>}
      <TodoAllItems onDeleteClick={handleDeleteItem} todoItems={todoItems}></TodoAllItems>
    </center>
  );
}

export default App;
