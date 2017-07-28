var myPokemonRoster = ["onix", "gyarados", "rapidash", "snorlax", "stoutland"];
var firstToFight = myPokemonRoster[0];
var secondToFight = myPokemonRoster[1]; 

myPokemonRoster.pop();
myPokemonRoster.length();
myPokemonRoster.push ("piloswine", "delibird");
myPokemonRoster.length();
var rostersize = myPokemonRoster.length;
console.log(myPokemonRoster.length);
console.log(myPokemonRoster);

for(var i=5; i>0; i--){
    console.log(myPokemonRoster[i]);
}

for(var i=myPokemonRoster.length; i>0; i--){
    console.log(myPokemonRoster[i]);
} 

if (myPokemonRoster.length>4) {
    for(var i=0; i<5; i++){
        console.log(myPokemonRoster[i]);
    }
} else {console.log("You Can't Play! Not Enough Pokemon");
    
}