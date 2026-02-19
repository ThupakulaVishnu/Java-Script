class user{
    username;
    static city;

    constructor(username,city){
        this.username=username;
        user.city=city;
    }

    changename(name){
        this.username=name;
    }

    static changecity(city){
        user.city=city;
    }

    dispaly(){
        console.log(this.username,user.city);
    }
}

var user1=new user("Vishnu","tpt");
user1.dispaly();
console.log(user1);

var user2=new user("manu","pune");
user2.dispaly();

user.changecity("Mumbai");
user1.dispaly();
user2.dispaly();
