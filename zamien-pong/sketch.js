var x = 180;
var y = 180;
var xspeed = 9;
var yspeed = 10;

var rect1y = 250;
var rect2y = 250;


function setup() {
  createCanvas(windowWidth-200, windowHeight-200);
 
}

function draw() {
  background (25);
  fill('white');
  rect(10, rect1y, 35, 100);
  rect(1000, rect2y, 35, 100);
    
    //distance from center of the screen
    var d = dist(windowWidth/2, windowHeight/2, mouseX, mouseY);

     fill (random(200, 250), random(200, 250), random(200, 250));
      ellipse (x, y, 30, 30);

     //bouncing horizontally
      x = x + xspeed;
      
     if (x > width || x < 0) {
         xspeed = -xspeed;
     }

     //bouncing veritcally
      y = y + yspeed;

     if (y > height || y < 0) {
           yspeed = -yspeed;
      }

if (keyIsDown(UP_ARROW)){
    rect2y -=10;
}

if (keyIsDown(DOWN_ARROW) && rect2y<=height-200){
    rect2y +=10;
}

}
