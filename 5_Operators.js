console.log(" ========================> 1)Arithmetic Operators <========================")
var a=10;
var b=21;

console.log("--------> Addition <--------")
console.log(a+b);

console.log("--------> Subtraction <--------")
console.log(b-a);

console.log("--------> Multiplication <--------")
console.log(a*b);

console.log("--------> Division <--------")
console.log(b/a);

console.log("--------> Modular division <--------")
console.log(b%a);

console.log("--------> Post increment <--------")
var c=a++
console.log(c);

console.log("--------> Pre increment <--------")
var c=++a;
console.log(c);

console.log("--------> Post decrement  <--------")
var c=b--;
console.log(c);

console.log("--------> Pre decrement  <--------")
var c=--b;
console.log(c);


console.log(" ========================> 2)Comparison (or) Relational operators <========================")
var x=10;
var y=20;
var z="10";

console.log("--------> Greater than <--------")
console.log(x>y);

console.log("--------> Less than <--------")
console.log(x<y);

console.log("--------> Loose equality <--------")
console.log(x==z);

console.log("--------> Strict equality <--------")
console.log(x===z);

console.log("--------> Greater than or equal to <--------")
console.log(x>=y);

console.log("--------> Less than or equal to <--------")
console.log(x<=y);

console.log("--------> Not equal to <--------")
console.log(x!=y);



console.log(" ========================> 3)Logical operators <========================")
var a=10, b=5;

console.log("--------> Logical AND (&&) <--------")
console.log(a>5 && b<10);

console.log("--------> Logical OR (||) <--------")
console.log(a>20 || b<=5);

console.log("--------> Logical NOT (!) <--------")
var c=false;
console.log(!c);



console.log(" ========================> 4)Assignment operator's <========================")


console.log("--------> Assignment operator <--------");
var a=10;
var b=20;

console.log("--------> Addition assignment  <--------");
var c=5;
c+=b;
console.log(c);

console.log("--------> Subtraction assignment  <--------");
var c=50;
c-=a;
console.log(c);

console.log("--------> Multiplication assignment  <--------");
var c=5;
c*=a;
console.log(c);

console.log("--------> Division assignment  <--------");
var c=50;
c/=b;
console.log(c);

console.log("--------> Modular division assignment  <--------");
var c=48;
c%=b;
console.log(c);



console.log(" ========================> 5)Bitwise operators <========================")

console.log("--------> Bitwise AND <--------");
console.log(5&1);

console.log("--------> Bitwise OR <--------");
console.log(5|1);

console.log("--------> Bitwise XOR <--------");
console.log(5^3);

console.log("--------> Bitwise NOT <--------");
console.log(~5);
console.log(~-11);
console.log(~0);

console.log("--------> Bitwise Left shift <--------");
console.log(6<<1);
console.log(-11<<2);

console.log("--------> Bitwise Right shift <--------");
console.log(11>>1);
console.log(-8>>2);

console.log(" ========================> 6)Special operators <========================")
console.log("--------> typeof <--------");
console.log("typeof returns the data type of a value in JavaScript.");
var x="Vishnu";
console.log(typeof x);

console.log("--------> delete <--------");
console.log("delete is used to remove a property from an object in JavaScript.");
var obj={name: "Vishnu", age :25};
delete obj.name;
console.log(obj);

console.log("--------> in <--------");
console.log("in checks if a property exists in an object and returns true or false.");
var per={name:"Vishnu",age:21};
console.log("name" in per);
console.log("city" in per);

console.log("--------> Ternary operator <--------");
console.log("The ?: (ternary) operator is a short way to write an if-else in one line.");
var age=18;
var result=(age>=18) ? "Yes" : "No";
console.log(result);

console.log("--------> dot <--------");
console.log("The . (dot) is used to access properties or methods of an object in JavaScript.");
var person={name:"Vishnu"}
console.log(person.name);

