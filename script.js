var num1,num2,num3;

num1 = Math.ceil(Math.random()*20);
num2 = Math.ceil(Math.random()*20);
num3 = Math.ceil(Math.random()*20);


var max = Math.max(num1, num2, num3);
var min = Math.min(num1, num2, num3);


document.getElementById("num1").innerHTML += num1;
document.getElementById("num2").innerHTML += num2;
document.getElementById("num3").innerHTML += num3;

var names=[
    "Achilles",
    "Barbara",
    "Cale",
    "Dacey",
    "Elle",
    "Frieren",
    "Garyll",
    "Hither",
    "Islett",
    "Jan",
    "Kira",
    "Leticia",
    "Mamon",
    "Nora",
    "Opera",
    "Prira",
    "Quiro",
    "Rex",
    "Sistina",
    "Toren"
];

var hm = num2*num3;
var minute = hm%60;
var hour = Math.floor(hm/60);
var cm = names[num1-1];

document.getElementById("w").innerHTML += "The dish with the most sales had sold " + max + " serving.";
document.getElementById("l").innerHTML += "The dish with the least sales had only sold " + min + " serving.";
document.getElementById("h").innerHTML += "The store-hours time: " +hm+ " minutes" + " (" +hour+ " hours and " +minute+ " minutes)";
document.getElementById("c").innerHTML += "The Top Customer of The Month: " + cm;
