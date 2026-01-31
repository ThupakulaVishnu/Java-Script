// ==============> 1 <===================

var userdetails={
    name:"Vishnu",
    Age:21,
    Gender:"Male",
    id:591,
    email:"vishnu@gmail.com"
};

console.log(userdetails);


var product={
    Name:"Iphone 14 Pro",
    price:115000,
    rating:4.7,
    stock:true,
    category:"Electronics"
};

console.log(product);

//===============> 2 <===============

console.log(" ---------->  Accessing the data by key <------------")

console.log(userdetails.Gender);

console.log(userdetails["name"]);

//==============> 3 <===========
console.log(" ----------->  Inserting new Property  <------------------");

product["brand_name"]="Apple";

console.log(product);


//==============> 4 <===========
console.log(" ----------->  Update the Property  <------------------");

userdetails["id"]=22101591;

console.log(userdetails);

//==============> 5 <===========
console.log(" ----------->  Delete the Property   <------------------");

console.log(userdetails);

delete userdetails["Gender"];

console.log(userdetails); 


//==================> 6 <===============
console.log(" -----------> Nested Object   <------------------");

var user={
    name:"Vishnu",
    id:591,
    isPlaced:true,
    address: {
        city:"Tirupati",
        state:"Andhra Pradesh",
        pincode:517501,
        area:{
            area1:"Bus stand road",
            area2:"Korlagunta",
            area3:"Lella Mahal Circle"
        }
    }
}

console.log(user);

//==================> 7 <===============
console.log(" ----------->  Accessing the data in  Nested Object   <------------------");

var x=user.address.state;
var y=user["address"]["state"]
console.log(x);
console.log(y);

//==================> 8 <===============
console.log(" ----------->  Modifying the data in  Nested Object   <------------------");

user["address"]["area"]["area2"]="Gandi Road";

console.log(user);

//==================> 9 <===============
console.log(" ----------->  delete the data in  Nested Object   <------------------");

delete user.address.city;


//==================> 10 <===============
console.log(" -----------> Insert the data in  Nested Object   <------------------");

user["address"]["area"]["area4"]="This is area 4";
console.log(user);

//===================> 11 <====================
console.log("--------------> Add an Function to Object <---------------");

var obj={
    id:101,
    brand:"Apple",
    fn: function(){
        var x=100;
        var y=200;
        console.log(x+y);
    }
};

obj.fn();
console.log(obj);