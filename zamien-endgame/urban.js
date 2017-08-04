var urbanDictURL="https://mashape-community-urban-dictionary.p.mashape.com/define?";

var value = "#guess-value"; 

function doIt(value) { 
    var output = $.ajax({
        url: urbanDictURL, // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        type: "GET", // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) {
            console.log("run"),
            //
            //Change data.source to data.something , where something is whichever part of the object you want returned.
            //To see the whole object you can output it to your browser console using:
            console.log(data);
            document.getElementById("#btn-default").innerHTML = data.source; 
            },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Key", "SNslQZlgULmshN0m7uGgsDDsfSZfp1T0kzdjsnLiNgYx5NxopK"); // Enter here your Mashape key
        }
    });
  

}
$( "body" ).append(doIt);