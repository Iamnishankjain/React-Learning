import 'bootstrap/dist/css/bootstrap.min.css'
import style from './CSS/Addtodo.module.css';
function Addtodo(){
    return (
        <div class="container text-center">
        <div class="row">
          <div class="col-6"><input type="text" placeholder="Enter Todo here" /></div>
          <div class="col-4"><input type="date" /></div>
          <div class="col-2"><button type="button" class={`btn btn-success ${style["custom-add-btn"]}`}>Add</button></div>
        </div>
        </div>
    );
}

export default Addtodo;