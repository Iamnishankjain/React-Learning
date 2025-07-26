import { useState } from "react";
import Item from "./Item";

function FoodItem({fooditem}) {

  let [activeItems,setActiveItems] = useState([]);
  let onBuyButton = (item,event) => {
    let newActiveItemArr = [...activeItems,item];
    setActiveItems(newActiveItemArr);
  }
  
  return (
    <ul className="list-group">
      {fooditem.map((item) => (
        <Item key={item} fooditem={item} bought={activeItems.includes(item)} handleBuyButton={(event) => onBuyButton(item,event)}></Item>
      ))}
    </ul>
  );
}

export default FoodItem;
