function TodoItem2(){

    let todo="School";
    let date="10/12/16";
    return (
        <div className="container">
            <div class="row">
            <div class="col-6">{todo}</div>
            <div class="col-4">{date}</div>
            <div class="col-2"><button type="button" class="btn btn-danger custom-delete-btn">Delete</button></div>
            </div>
        </div>
    );
}

export default TodoItem2;