let useDateView = (d)=>{
    let x = new Date(d);
    let y = x.toDateString();
    let time = x.toLocaleString("en-US", {
        hour : "numeric",
        minute : "2-digit",
        hour12 : true
    });
    let arr = y.split(" ");
    return arr[2]+"-"+arr[1]+"-"+arr[3]+" "+time;
    // return time

}

export default useDateView;
// a = "rohit varma" 
// a.split(" ")