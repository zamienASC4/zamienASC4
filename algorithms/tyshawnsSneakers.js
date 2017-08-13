var array = ["Air Jordan 3", "Air Jordan 2", "Air Jordan 5", "Air Jordan 4", "Air Jordan 3", "Air Jordan 7", "Air Jordan 6", "Air Jordan 14", "Air Jordan 9", "Air Jordan 10", "Air Jordan 11", "Air Jordan 12", "Air Jordan 13", "Air Jordan 14", "Air Jordan 15"];  


var compare = "Air Jordan 11";


function sortArray(){
    console.log(array.sort);
}

/*function swap (array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp; 
}

function binary_search(arr, letter){
    var first = 0;
    var middle = Math.floor(arr.length/2);
    var last = arr.length -1;

    while(true){
        var test = arr[last];
        if(arr[middle] === letter){
            return true
        }else if(arr[first] >= letter && letter < arr[middle]){
            last = middle -1;
            middle = Math.floor((first + last)/2);
        }else if (arr[middle] < letter && letter <= arr[last]){
            first = middle +1;
            middle = Math.floor((first + last)/2);
        }else {
            return false;
        }
    }
}*/