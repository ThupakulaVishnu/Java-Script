//         ==============>   Destructuring with object    <==================

var obj={
    username:"vishnu",
    city:"Ap",
    id:101,
    gender:"male"
}

var {id, city, gender}=obj;

console.log(id);
console.log(gender);

//         ==============>   Destructuring with array    <==================

var product=["Iphone 14","Vivo A27","Samsing S23","Iphone 13"];

var [e1,e2,e3]=product;

console.log(e1);
console.log(e3);