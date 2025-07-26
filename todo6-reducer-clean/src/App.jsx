import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoAllItems from "./components/TodoAllItems";
import WelcomeMsgError from "./components/WelcomeMsgError";
import TodoItemsContextProvider from "./store/Todo_Items-Store";


function App() {

  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <WelcomeMsgError />
      <TodoAllItems></TodoAllItems>
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
