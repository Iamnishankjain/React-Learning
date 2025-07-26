import 'bootstrap/dist/css/bootstrap.min.css'
import style from './css/TodoAllItems.module.css';
import TodoItem from "./TodoItem";
function TodoAllItems({onDeleteClick, todoItems }) {
  return (
    <div className="container">
    <div className={style.container}>
      {todoItems.map((item) => (
        <TodoItem date={item.date} name={item.name} key={item.name} onDeleteClick={onDeleteClick}></TodoItem>
      ))}
    </div>
    </div>
  );
}

export default TodoAllItems;