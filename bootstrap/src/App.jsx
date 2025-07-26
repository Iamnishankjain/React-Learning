import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
    </center>
  );
}

export default App;
