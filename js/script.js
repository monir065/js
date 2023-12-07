// bulb on off 
function bulbOn(){
    document.getElementById('img').src="images/on.gif";
}

function bulbOff(){
    document.getElementById('img').src="images/off.gif";
}
// bulb on off 

// show date and time stert
function showDt(){
    document.getElementById('dt').innerHTML= Date();
}
function dtHide(){
    document.getElementById('dt').style.display = "none"; 
}
// show date and time end
// Welcome massage start
function welcome(){
    document.getElementById('wel').innerHTML =
    "Welcome to javaScript.";
} 
// Welcome massage end
// display show/hide start
function hideD(){
    document.getElementById('sh').style.display="none";
}
function showD(){
    document.getElementById('sh').style.display="block";
}
// display show/hide end
// Output start
function outPut(){
    document.getElementById('out').innerHTML= 5+6;
} 
// Output end
// statment start
let a, b, c;
a = 5;
b = 8; 
c = a+b
document.getElementById('stat').innerHTML = c;
// statment end
// Variables start
var x= 20;
var y= 15;
var z= x + y;
document.getElementById('vari').innerHTML = "X + Y value:" +z;

// Variables end
// Constant start
const person1 =40; 
const person2 =32; 
var total = person1 + person2;
document.getElementById('cons').innerHTML = "Total:" + total;
// Constant end 
// Assingment Operators start
var x =10;
var y = x;
document.getElementById('assi').innerHTML= "y value is:" + y;

// Assingment Operators end
// Add operator start
var x = 25;
var y = 30;
var z = x+y;
document.getElementById('addi').innerHTML = "x+y value is:" +z;

// Add operator end
// Multiplying start
var x = 8;
var y = 5;
var z = x*y;
document.getElementById('mul').innerHTML= "x*y value is:" +z;
// Multiplying end
// value increment start
let x = 7;
x++;
let y = x;
document.getElementById("inc").innerHTML = "x increment value is :" +y;
// value increment end