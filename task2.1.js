let x =0;
let y=0;


const num1= document.getElementById("num1").innerHTML = x;
const num2= document.getElementById("num2").innerHTML = y;
function home1() {
document.getElementById("num1").innerHTML = x+1;
x=x+1;
}
function home2() {
document.getElementById("num1").innerHTML = x+2;
x=x+2;
}
function home3() {
document.getElementById("num1").innerHTML = x+3;
x=x+3;
}

function guest1() {
document.getElementById("num2").innerHTML = y+1;
y=y+1;
}
function guest2() {
document.getElementById("num2").innerHTML = y+2;
y=y+2;
}
function guest3() {
document.getElementById("num2").innerHTML = y+3;
y=y+3;
}

function rest() {
x=0;
y=0;
document.getElementById("num1").innerHTML = x;
document.getElementById("num2").innerHTML = y;

}