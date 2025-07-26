import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoAllItems from "./components/TodoAllItems";
import WelcomeMsgError from "./components/WelcomeMsgError";
import { useState } from "react";
import { TodoItemsContext } from "./store/Todo_Items-Store";
function App() {
  let [todoItems,setTodoItems]=useState([]);


  const handleAddNewItem = (itemName,itemDate) => {
    const newTodoItem = [...todoItems,{name: itemName,date: itemDate}];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (itemName,itemDate) =>{
    const newTodoItem = todoItems.filter(item => item.name !== itemName);
    setTodoItems(newTodoItem);
  };

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
