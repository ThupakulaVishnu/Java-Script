console.log("================>    var     <================        ");

function fn(){
    var name="Vishnu";
    if(true){
        var gender="male";
    }
    console.log(name);
    console.log(gender);  //var is function scope so it don't show error
}

fn();

console.log("================>    let and const     <================        ");

function fn1(){
    let name="Vishnu";
    if(true){
        let gender="male";
        const id=101;
    }
    console.log(name);
    //console.log(gender,"-->",id)  //let and const are block scope.This shows error...
}

fn1();


console.log("================>    Difference between var,let and const     <================        ");

console.log("======> 1) Hoisting <=======        ");
      

console.log("Var -->  ",name);  //var asign "undefined" after hoisting.
var name="This is the var";

console.log("let and const is shows error in hoisting");
// console.log(a1);

let a1="This is the a1";

// console.log(a2);

const a2="This is a2";


console.log("======> 2)Declaration and Initialization <=======        ");

var gender;

var age=21;

let id;

let email="vishnu@gmail.com";

console.log("var & let allow the both");

const name1="Vishnu";

console.log("const allows only Initialization...");


console.log("======> 3)Reassigning <=======        ");

var b1=10;

b1=20;

console.log("var --> ",b1);

let b2="Vishnu";

b2="manu";

console.log("let -->", b2);

console.log("var & let allow the Reassigning");

const b3=true;

// b3=false;   // const Reassigning is not possiable

console.log("const --> ",b3);

console.log("const not allows the reassigning")

console.log("======> 4)Shadowing <=======        ");

var b1=10;

var b1=20;

console.log("var  -->",b1);

console.log("Var allows Shadowing");

let c1="Vishnu";
console.log("let  -->",c1);

//let c1="god"; // let not allow Shadowing

const c2=true;
console.log("const  -->",c2);

//const c2=false; //const not allow Shadowing

console.log("let & const not allows Shadowing");