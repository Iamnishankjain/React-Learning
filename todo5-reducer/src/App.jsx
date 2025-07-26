import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoAllItems from "./components/TodoAllItems";
import WelcomeMsgError from "./components/WelcomeMsgError";
import { useState, useReducer } from "react";
import { TodoItemsContext } from "./store/Todo_Items-Store";

// Reducer is a pureFunction
 
// todoItemsReducer(currState,action)--------------------------------
const todoItemsReducer = (currTodoItems,action) => {
  let newTodoItems = currTodoItems;
  if(action.type === "NEW_ITEM"){
    newTodoItems = [...currTodoItems,{name: action.payload.itemName,date: action.payload.itemDate}];
  }else if(action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter(item => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}



function App() {
  // const [todoItems,setTodoItems]=useState([]);
  const [todoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);


  const handleAddNewItem = (itemName,itemDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  // const handleAddNewItem = (itemName,itemDate) => {
  //   const newTodoItem = [...todoItems,{name: itemName,date: itemDate}];
  //   setTodoItems(newTodoItem);
  // };

  const handleDeleteItem = (itemName,itemDate) =>{
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };


  // const handleDeleteItem = (itemName,itemDate) =>{
  //   const newTodoItem = todoItems.filter(item => item.name !== itemName);
  //   setTodoItems(newTodoItem);
  // };

  return (
    <TodoItemsContext.Provider value={{
      todoItems:todoItems,addNewItem : handleAddNewItem ,deleteItem: handleDeleteItem,
      }}>
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <WelcomeMsgError />
      <TodoAllItems></TodoAllItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
