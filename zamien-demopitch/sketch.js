var foodURL = "http://setgetgo.com/randomword/get.php?len=5";

function RandomWord() {
var requestStr = "http://randomword.setgetgo.com/get.php";

$.ajax({
    url:foodURL,
    success:function(data){
        var food = data;
        $("body").append("<h1>" +food+ "</h1>");
    }    
})
}