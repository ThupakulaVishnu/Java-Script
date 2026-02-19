class A{
    name;
    email;

    constructor(name,email){
        this.name=name;
        this.email=email;
    }

    dispaly(){
        console.log(this.name,this.email);
    }

    changenameemail(name,email){
        this.name=name;
        this.email=email;
    }
}

class B extends A{
    gender;
    city;

    constructor(gender,city){
        super("Vishnu","vishnu@gmail.com");
        this.gender=gender;
        this.city=city;
    }

    displayDetails(){
        console.log(this.name,this.email,this.gender,this.city);
    }
}

var b=new B("Male","Tpt");
b.displayDetails();
b.changenameemail("manu","manu@gmail.com");
b.dispaly();
b.displayDetails();