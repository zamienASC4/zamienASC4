function setup (){
    createCanvas(800,800);
    
}

function draw (){
    background(0);
    var grid = [
        [false + rect(100, 100, 50, 50),false + rect(150, 100, false + 50, 50),false + rect(200, 100, 50, 50), false + rect(250, 100, 50, 50), false + rect(300, 100, 50, 50), false + rect(350, 100, 50, 50), false + rect(400, 100, 50, 50), false + rect(450,100, 50, 50)],
        [false + rect(100, 150, 50, 50),false + rect(150, 150, false + 50, 50),false + rect(200, 150, 50, 50), false + rect(250, 150, 50, 50), false + rect(300, 150, 50, 50), false + rect(350, 150, 50, 50), false + rect(400, 150, 50, 50), false + rect(450,150, 50, 50)],
        [false + rect(100, 200, 50, 50),false + rect(150, 200, false + 50, 50),false + rect(200, 200, 50, 50), false + rect(250, 200, 50, 50), false + rect(300, 200, 50, 50), false + rect(350, 200, 50, 50), false + rect(400, 200, 50, 50), false + rect(450,200, 50, 50)],
        [false + rect(100, 250, 50, 50),false + rect(150, 250, false + 50, 50),false + rect(200, 250, 50, 50), false + rect(250, 250, 50, 50), false + rect(300, 250, 50, 50), false + rect(350, 250, 50, 50), false + rect(400, 250, 50, 50), false + rect(450,250, 50, 50)],
        [false + rect(100, 300, 50, 50),false + rect(150, 300, false + 50, 50),false + rect(200, 300, 50, 50), false + rect(250, 300, 50, 50), false + rect(300, 300, 50, 50), false + rect(350, 300, 50, 50), false + rect(400, 300, 50, 50), false + rect(450,300, 50, 50)],
        [false + rect(100, 350, 50, 50),false + rect(150, 350, false + 50, 50),false + rect(200, 350, 50, 50), false + rect(250, 350, 50, 50), false + rect(300, 350, 50, 50), false + rect(350, 350, 50, 50), false + rect(400, 350, 50, 50), false + rect(450,350, 50, 50)],
        [false + rect(100, 400, 50, 50),false + rect(150, 400, false + 50, 50),false + rect(200, 400, 50, 50), false + rect(250, 400, 50, 50), false + rect(300, 400, 50, 50), false + rect(350, 400, 50, 50), false + rect(400, 400, 50, 50), false + rect(450,400, 50, 50)],
        [false + rect(100, 450, 50, 50),false + rect(150, 450, false + 50, 50),false + rect(200, 450, 50, 50), false + rect(250, 450, 50, 50), false + rect(300, 450, 50, 50), false + rect(350, 450, 50, 50), false + rect(400, 450, 50, 50), false + rect(450,450, 50, 50)],

    ]

    var assignShipstoGrid = for(var i=0; i<3; i++){
        
    }


    var numberOfShips = 3;
    var textForNumberOfCpuShips = text("Number of ships left= " + numberOfShips, 100, 75);
    fill("white");
    
}

function mouseClicked() {
    if(grid=true){
        console.log()
    }
}

