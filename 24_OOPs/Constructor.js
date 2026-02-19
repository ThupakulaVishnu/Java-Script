class user{
    username;
    gender;
    email;
    city;

    constructor(name,gender,email){
        this.username=name;
        this.gender=gender;
        this.email=email;
        this.city="Tirupati";
    }
    dispaly(){
        console.log(this.username,this.gender,this.email,this.city);
    }

}

var user1=new user("Vishnu","Male","vishnu@gmail.com");
var user2=new user("raj","male","raj@gmail.com");
var user3=new user("manu","Female","manu@gmail.com");

user1.dispaly();

user2.dispaly();

user3.dispaly();