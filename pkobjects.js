function basePokemon(atk, def, hp, type, name, legendary){
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.type = type;
    this.name = name;
    this.legendary = legendary;

}

var Wailord = new basePokemon(100, 150, 200, "water", "Wailord", false);
var Piloswine = new basePokemon(100, 80, 100, "ice", "Piloswine", false);
var Entei = new basePokemon(115, 85, 115, "fire", "Entei", false);
var Latios = new basePokemon(90, 80, 80, "dragon", "Latios", true);

var roster = [Wailord, Piloswine, Entei, Latios];

function printRoster(){
    for(var i=0; i<roster.length; i++){
        console.log(roster);
    }
}

//printRoster()

function pokemonAttacked(){
    for(var i=0; i<roster.length; i++){
        console.log(roster[i].hp)
        roster[i].hp = roster[i].hp - 10
        console.log(roster[i].hp)
    }
}

pokemonAttacked()