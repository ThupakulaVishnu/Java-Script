// ===>   Arrow Function    <====
var myfun= () => "I am returning from Arraw Function"

console.log(myfun())


//  =====>  Anonymous Function with function    <========

var obj={
    username:"Vishnu",
    city:"AP",
    print: function(){
        console.log(this.username,this.city);   //This refers to obj
    }
}
obj.print()

//output : Vishnu AP

//  =====>  Arrow Function with function    <========

var obj1={
    username:"Vishnu",
    id:102,
    city:"Ap",
    print: () =>{
        console.log(this.id,this.username);
    }
}

obj1.print();