import 'bootstrap/dist/css/bootstrap.min.css'
import style from './CSS/TodoItem.module.css'
function TodoItem({name,date}){
    return (
        <div className={`${style.container} text-center`}>
            <div className="row">
            <div className="col-6">{name}</div>
            <div className="col-4">{date}</div>
            <div className="col-2"><button type="button" className={`btn btn-danger ${style["custom-delete-btn"]}`}>Delete</button></div>
            </div>
        </div>
    );
}

export default TodoItem;