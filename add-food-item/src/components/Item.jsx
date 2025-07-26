import style from "./Item.module.css";


function Item(props){
    // const handleBuyButton=( fooditem )=>{
    //   console.log(`${fooditem} being bought`)
    // };
    // const handleBuyButton=(event)=>{
    //   console.log(event)
    //   console.log(`${props.fooditem} being bought`)
    // };
    return <li className={`${style["list-of-item"]} list-group-item ${props.bought && "active"}`}>
          <span className={`${style["item-span"]}`}>{props.fooditem}</span>
          {/* <button className={`btn btn-info ${style.button}`} 
            onClick={()=>handleBuyButton(props.fooditem)}
          >Buy</button> */}
          {/* <button className={`btn btn-info ${style.button}`} 
            onClick={(event) => handleBuyButton(event)} */}
            <button className={`btn btn-info ${style.button}`} 
            onClick={props.handleBuyButton}
          >Buy</button>
        </li>
};

export default Item;