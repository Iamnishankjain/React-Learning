import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./components/foodItem";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {

  let [items, setItems] = useState([]);

  const handleOnKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newItem=event.target.value;
      event.target.value='';
      let newItemArr = [newItem.trim(),...items];  
      setItems(newItemArr);
    }
  };

  return (
    <Container>
      <h1 className="heading">Food items</h1>
      <FoodInput handleOnKeyDown={handleOnKeyDown}></FoodInput>
      <ErrorMessage fooditem={items} />
      <FoodItem fooditem={items}></FoodItem>
    </Container>
  );
}

export default App;
