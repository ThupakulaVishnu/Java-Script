function fun(){
    var x=10;
    var y=20;
    var result=x+y;
    console.log(result);
}
fun();
console.log("================> 1 <============")
function fun1(){
    var city="Bangalore";
    console.log(city);
}
fun1();


console.log("================> 2 <============")
function add(a,b){
    var reslt=a+b;
    console.log(reslt);
}
add(20,30);
add(100,200);
add(50,50);
add(1,2);

console.log("================> 3 <============")

function fn(name,city){
    console.log(name,city);
}
fn("Vishnu",200,40,10);  // Here 40 and 10 are ignored
fn("Vishnu");   // Here parameters are 2 and arguments are 1 
                // So, city = undefined

console.log("================> 4 <============")

function fun(par){
    console.log(par);
    par(1,2);
    par(10,20);
    par(23,27);
}

fun(function (){
    var city="Bangalore";
    console.log(city);
});

console.log("--------------Passing an function------------")

function print(){
    console.log("Welcome every one");
}
fun(print);

console.log("--------------Passing parameterized function------------")

function add(x,y){
    console.log(x+y);
}
fun(add);

console.log("================> 5 <============")

function fun(x,y){
    return x+y;
}
var output=fun(10,20);
console.log(output);

console.log("================> 6 <============")

function myfun(x,y){
    var result=x+y;

    return function(){
        console.log(x+y);
    }
}
var output=myfun(12,18);
console.log(output);
output();

