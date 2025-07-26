import 'bootstrap/dist/css/bootstrap.min.css'
import style from './css/TodoAllItems.module.css';
import TodoItem from "./TodoItem";
function TodoAllItems({ todoItems }) {
  return (
    <div className="container">
    <div className={style.container}>
      {todoItems.map((item) => (
        <TodoItem date={item.date} name={item.name}></TodoItem>
      ))}
    </div>
    </div>
  );
}

export default TodoAllItems;