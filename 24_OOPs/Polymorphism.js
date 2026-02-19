class A{
    num1=100;
    num2=20;
    operation(){
        console.log(this.num1+this.num2);
    }
}

class B extends A{
    operation(){
        super.operation();
        console.log(this.num1-this.num2);
    }
}

var b=new B();
b.operation();
console.log(b);