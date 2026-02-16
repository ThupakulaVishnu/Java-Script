//=========================>  Spread Operator with object      <=========================

var obj1={
    id:101,
    name:"vishnu",
    age:22,
    email:"vishnu@gmail.com"
}

var obj2={
    ...obj1,
    number:1234567,
    gen:"Male",
    city:"Ap"
}

console.log(obj2);

//=========================>  Spread Operator with array   <=========================

var arr1=[1,"Vishnu",101, "Ram", 22, true,{id:591,name:"Vishnu"}]

var arr2=[...arr1,"Gowtham",false,"This is array"];

console.log(arr2);

//=========================>  Rest Parameter   <=========================

function f1(x,y,...z){
    console.log(x,y,z);
}
f1(10,20,30,40,50,60,70,80);