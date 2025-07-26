import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoAllItems from "./components/TodoAllItems";
function App() {
  let todoItems=[
    {
      name: "Buy milk",
      date: "10/12/2024",
    },
    {
      name: "go to college",
      date: "10/12/2024",
    },
    {
      name: "do your home work",
      date: "10/12/2024",
    },
  ];
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <TodoAllItems todoItems={todoItems}></TodoAllItems>
    </center>
  );
}

export default App;
