function setup(){
    createCanvas(700,700);
    background(0);
    stroke("pink");
    strokeWeight(5);
}

function mouseDragged(){
    fill(random(["white", "blue", "red", "green", "purple", "orange"]));
    ellipse(mouseX, mouseY, random(100), random(100)), 
    rect(mouseX, mouseY, random(100), random(100));
    return false;
}


