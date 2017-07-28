var playerChoice = "r";
var cpuChoice = "r";

if (playerChoice == "r" && cpuChoice == "p"){
    console.log("CPU won because it chose paper")
}

if (playerChoice == "r" && cpuChoice == "s"){
    console.log("You won because you choose rock")
}

if (playerChoice == cpuChoice){
    console.log("It's a draw")
}

if (playerChoice == "s" && cpuChoice == "r"){
    console.log("Cpu won because it chose rock")
}

if (playerChoice == "s" && cpuChoice == "p"){
    console.log("You won because you choose scissors")
}

if (playerChoice == "p" && cpuChoice == "r"){
    console.log("You won because you chose paper")
}

if (playerChoice == "p" && cpuChoice == "s"){
    console.log("Cpu won because it chose scissors")
}