var x = 200;
var y = 200; 

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(225);
    fill("purple")
    ellipse(x, y, 50, 50)

    x += 10
    y -= 10

    if(x=0){
        x += 100;
    }else if(x=400){
        x -=100;
    }else if(y=0){
        y +=100;
    }else if(y=400){
        y -=100;
    }

}


