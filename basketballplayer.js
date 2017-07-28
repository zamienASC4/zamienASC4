function BasketballPlayer(name, team, height, position, number, networth, isGood, pastTeams){
    this.name = name;
    this.team = team;
    this.height = height;
    this.position = position;
    this.number = number;
    this.networth = networth;
    this.isGood = isGood;
    this.pastTeams = pastTeams;
}

var shaq = new BasketballPlayer("Shaquille O'Neal", "Celtics", " 7'1\" ", "Center", 36, 1000000000, true, ["Magic", "Lakers", "Heat", "Suns", "Cavs", "Celtics"]);

var bron = new BasketballPlayer("Lebron James", "Cavaliers", " 6'8\" ", "small forward", 23, 100000000, true, ["Heat"]);

bron.pastTeams.push(bron.team);
bron.team = "warriors";

console.log(bron);