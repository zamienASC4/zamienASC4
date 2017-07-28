function Superhero(realName, ability, gender, archEnemy, age, weakness){
    this.realName = realName;
    this.ability = ability;
    this.gender = gender;
    this.archEnemy = archEnemy;
    this.age = age;
    this.weakness = weakness;

this.talk = function(){
    console.log("Yo! My name is " + realName);
}

    this.callForHelp = function(){
        this.call = call;
        console.log(call);
    }

    this.callForHelp = function(call){
        console.log(call);
    }

}

var superMan = new Superhero ("Clark Kent", "Dat Money", "Male", "Lex Luthor", 30, "Kyrptonite");
var wonderWoman = new Superhero ("Dianna Prince", "Super Strength", "Female", "Donald Trump", 20, "Guns");

superMan.ability = "lazer vision";
//console.log(superMan);
wonderWoman.archEnemy = superMan;



wonderWoman.callForHelp("I'm boolling!");

superMan.callForHelp("It's not loolking good right now!");