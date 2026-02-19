var prom=new Promise(function(resolve, reject){
    // resolve({
    //     status:true,
    //     data:[{},{}]
    // })

    // ===> OR <===
    resolve(
        "This is success section"
    )

    // reject({
    //     status:false,
    //     data:"Error message"
    // })
});

// console.log(prom);

// At a time we can not send data in both "resolve" and "reject" . We can send data any one only

//       ------->We can consume the Promise by using <----------


//                    ==========>1)then() and catch() functions<========== (OR)


prom.then(function(success){
    console.log("Then", success);  // runs if resolve() is called
}).catch(function(error){
    console.log("Catch",error);   // runs if reject() is called
});

//                    ==========>2)async await function<==========

//console.log("  =====>Example 1: Promise with resolve (Success case)<=====");
function getData(){
    return new Promise((resolve,reject)=>{
        resolve("Data received successfully");
    });
}
async function showData(){
    let result=await getData();
    console.log(result);
}
showData();

//console.log("  =====>Example 2: Promise with reject (Error case)<=====");

function getData() {
    return new Promise((resolve, reject) => {
        reject("Something went wrong");
    });
}

async function showData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

showData();
