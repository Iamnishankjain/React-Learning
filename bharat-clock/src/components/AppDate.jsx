function AppDate(){
    let date =new Date();

    let day=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();
    let hr=date.getHours();
    let min=date.getMinutes();
    let ss=date.getSeconds();
    let slot='AM';
    if(hr>12) slot='PM';
    if(day<10) day='0'+day;
    if(month<10) month='0'+month;
    if(hr==0) hr=12;
    if(hr>12) hr=hr%12;
    if(hr<10) hr='0'+hr;
    if(min<10) min='0'+min;
    if(ss<10) ss='0'+ss;
    return (
        <div> 
            <span>This is the current time: </span>
            <span className="fw-bolder">{day}/{month}/{year} {hr}:{min}:{ss} {slot}</span>
        </div>
    );
}

export default AppDate;