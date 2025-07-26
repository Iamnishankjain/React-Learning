import {useContext} from "react"
import {TodoItemsContext} from "../store/Todo_Items-Store"
import 'bootstrap/dist/css/bootstrap.min.css'
import style from './css/TodoAllItems.module.css';
import TodoItem from "./TodoItem";
function TodoAllItems() {
  const obj = useContext(TodoItemsContext);
  const todoItems=obj.todoItems;
  return (
    <div className="container">
    <div className={style.container}>
      {todoItems.map((item) => (
        <TodoItem date={item.date} name={item.name} key={item.name}></TodoItem>
      ))}
    </div>
    </div>
  );
}

export default TodoAllItems;