// Put your JavaScript lab code here!

//Strings
var str = "I like JavaScript more than I like to party. ";
var res1 = str.slice(28,45);

var str = "I love Washington State University."
var res2 = str.replace("Washington State University", "The University of Washington");

var res = res1.concat(res2);

//Functions
function sumUpTo(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

function vowelCount(string) {
    return string.match(/[aeiou]/gi).length;
}

//Arrays
function findMin(Arrays) {
    return Math.min.apply(null, Arrays);
}

//Objects
var title = ["Harry Potter and the Goblet of Fire", "The Great Gastby", "The Hunger Games"];
var author = ["J.K.Rowling", "F. Scott Fitzgerald", "Suzanne Collins"];
var read = ["have read", "have not read", "have not read"];

title.push("1984");
author.push("George Orwell");
read.push("have read");
