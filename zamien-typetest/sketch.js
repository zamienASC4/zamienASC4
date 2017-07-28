function setup (){
    createCanvas(400,400);
    background(225);
    text("Type what is below to advance", 10, 10);
    text("Please type:", 10, 50);
    text("All", 10, 90);
    text("User score: " + score, 10, 130);
    var key = createInput("");
    key.input(myInputEvent);
}

var score = 0;


function keyTyped(){
    if(key === 'All') {
        console.log("You are correct");
        score = 10;
    }else if(key === "ALl"){
        console.log("Please try again");
    }
}
