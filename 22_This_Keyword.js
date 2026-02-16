var obj1={
    name:"Obj1",
    c:100
};

var obj2={
    name:"Obj2",
    c:1000
};

function add(x,y){
    console.log(this.name," --> ",x+y+this.c);
}

add.call(obj1,10,90);

add.call(obj2,40,30);

add.apply(obj1,[10,20]);

add.apply(obj2,[30,40]);

// ==========>  bind()  <=========

var obj3={
    name:"Vishnu"
};

var obj4={
    name:"Gowtham"
};

function great(mess){
    console.log("Hello", this.name);
    console.log(mess*2);
}

var vish=great.bind(obj3,2);
var gow=great.bind(obj4,4);

vish();
gow();