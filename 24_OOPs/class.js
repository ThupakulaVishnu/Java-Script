class products{
    brandname="Apple";
    modelname="Mocbook pro";
    price=230000;
    rating=4.5;

    display(){
        console.log(this.brandname,this.modelname,this.price,this.rating);
    }

    changeprice(newprice){
        this.price=newprice;
    }
}

var prod1=new products();
var prod2=new products();

console.log(prod1);
console.log(prod2);

console.log(" =====> Dispaly method <======");

prod1.display();

console.log(" =====> Changeprice method <======");

prod1.changeprice(10);
console.log(prod1);

// We can change like this also...

prod2.brandname="Samsung";
prod2.modelname="Galaxy s23 Ultra";
prod2.price=125000;
prod2.rating=4.3;

console.log(prod2);