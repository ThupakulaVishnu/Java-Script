// =========>    Without returning inner function      <========================

function outer(){
    var city="Andhra Pradesh";
    console.log("This is outer",city);
    function inner(x,y){
        console.log(x+y);
        console.log("This is inner function",city);
    }
    inner(10,20);
}
outer();
console.log("------------------------------------------------");
// =========>    With returning inner function      <========================

function outer1(){
    var city="Ap";
    console.log("This is outer",city);
    function inner1(x,y){
        console.log(x+y);
        console.log("This is inner function",city);
    }
    return inner1;
}
var infun=outer1();

infun(30,70);