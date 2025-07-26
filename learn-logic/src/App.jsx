import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./components/foodItem";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let items = ["milk", "pizza", "burger", "banana", "mango", "salad"];

  // let textStateArr = useState("Enter item by user");
  // let textToShow = textStateArr[0];
  // let setTextState=textStateArr[1];
  let [textToShow,setTextState] =useState("Enter item by user"); //Destructure as array [] not object {}

  const handleOnChange=(event)=>{
    console.log(event.target.value);
    setTextState(event.target.value);
  }
  return (
    <Container>
      <h1 className="heading">Food items</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <ErrorMessage fooditem={items}/>
      <FoodItem fooditem={items}></FoodItem>
    </Container>
  );
}

export default App;
