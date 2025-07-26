import Item from "./Item";

function FoodItem({fooditem}) {
  return (
    <ul className="list-group">
      {fooditem.map((item) => (
        <Item key={item} fooditem={item} handleBuyButton={() => console.log(` ${item} bought`)}></Item>
      ))}
    </ul>
  );
}

export default FoodItem;
