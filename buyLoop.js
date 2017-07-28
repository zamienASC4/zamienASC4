var prompt = require('prompt-sync')();

var n = prompt('What do you want');

var money = 1000;

var louisVuittonDuffleBag = [];

while(money > 100){
console.log("You have $" + money + "left")
var answer= prompt("You can buy Yeezys for 400, gucci flip flops for 200, or ray bans for 100");
    if (answer.toLowerCase() == "yeezys" && money >= 500){
        money = money - 400;  
        louisVuittonDuffleBag.push("Yeezys");
        console.log("You have successfully bought these pairs of yeezys")
        }
    else if(answer.toLowerCase() == "gucci flip flops" && money >= 300){
        money = money -200;
        louisVuittonDuffleBag.push("Gucci Flip Flops");
        console.log("You have successfully bought this pair of Gucci Flip Flops")
        }

    else if(answer.toLowerCase() == "ray bans" && money >= 200){
        money = money -100;
        louisVuittonDuffleBag.push("Ray Bans");
        console.log("You have successfully bought this pair of Ray Bans")
        }
    else{
        cosnole.log("You can't get this item");
        }
}

console.log("Leave, you're broke!")

