var today = new Date ();
var month = today.getMonth();
var day = today.getDay();
var year = today.getYear();

function currentDate(){
    console.log( "The Date is " + month + day + year);
}