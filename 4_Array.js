var details = [] //Empty Array

var userdetails = ["Vishnu", 100, true, { city: "tpt", state: "AP" }, "Male"]

console.log(typeof userdetails)

var arr=function(){};
console.log(typeof arr);

//===================> 1 <======================
console.log("-----------> Length of the array <-----------------");

var user=[
    "Vishnu Thupakula",
    true,
    101,
    {city:"Tirupati"},
    "Gender",
    "male",
    100
]

console.log(user.length);

//===================> 2 <======================
console.log("-----------> Add Last to array <-----------------");

user.push("Haddi Mera buddy");

console.log(user);

//===================> 3 <=====================
console.log("-----------> Add front to array <-----------------");

user.unshift({city:"tpt"},false);

console.log(user);

//===================> 4 <======================
console.log("-----------> Remove front to array <-----------------");

user.shift();

console.log(user);

//===================> 5 <======================
console.log("-----------> Remove last to array <-----------------");

user.pop();

console.log(user);

//===================> 6 <======================
console.log("-----------> Remove element at specific position <-----------------");

user.splice(1,3);

console.log(user);

//===================> 7 <======================
console.log("-----------> Adding element at specific position <-----------------");

user.splice(3,0,{state:"Ap",id:101},"Ghost");

console.log(user);

//===================> 8 <======================
console.log("-----------------> slice <-----------------");

console.log(user.slice(2,5));

//===================> 9 <======================
console.log("-----------------> indexOf <-----------------");

console.log(user.indexOf('male'));

//===================> 10 <======================
console.log("-----------------> lastindexOf of element<-----------------");

user.splice(2,0,100);
console.log(user);

console.log(user.lastIndexOf(100));

//===================> 11 <======================
console.log("-----------------> include <-----------------");

console.log(user.includes(100));

console.log(user.includes(true));

//===================> 12 <======================
console.log("-----------------> forEach <-----------------");

user.forEach(function(element,index){
    console.log(element," --> ",index);
})

//===================> 13 <======================
console.log("-----------------> map <-----------------");

var arr=[10,20,30,40,50,60];
var newarr=arr.map(function(ele,inx){
    return ele*5;
});

console.log(arr);
console.log(newarr);

//===================> 14 <======================
console.log("-----------------> filter <-----------------");

var arr=[101,200,20,155,60,75];
var filterarray=arr.filter(function(ele,inx){
    return ele>100;
});
console.log(filterarray);

//===================> 15 <======================
console.log("-----------------> reduce <-----------------");

var arr=[1,2,3,4,5,15]
var sum=arr.reduce((total,curr)=>total+curr,0);
console.log(sum);
