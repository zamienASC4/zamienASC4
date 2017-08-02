var randomUserURL = "https://randomuser.me/api/";


var userFirstName = "";
var userLastName = "";
var userPhoto = "";
var userState = "";

$.ajax({
    url:randomUserURL,
    success:function(data){
        console.log(data.results[0]);
        var userFirstName = data.results[0].name.first;
        var userLastName = data.results[0].name.last;
        var userPhoto = data.results[0].picture.thumbnail;
        var userState = data.results[0].location.state;
        $("body").append("<h1>This is "+userFirstName + " " +userLastName+" from "+ 
        function(){
            $.ajax(
                    {
                    url:"https://restcountries.eu/rest/v2/alpha/usa",
                    success:function(data)
                    {console.log(data.name);},
                    }
                )
        }
                
        )
}});