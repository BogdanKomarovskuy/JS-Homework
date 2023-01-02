console.log("Task 4 :")

let credits = 23580; 
const pricePerDroid = 3000;
let things = prompt('Quantity you want buy?');
if(things == null){
    alert("Canceled by user")}
    else{
        let totalPrice = things * pricePerDroid;
        console.log(totalPrice)
        if(totalPrice > credits){
            alert("There are insufficient funds in the account")
        } else {
            let balance = credits - (pricePerDroid * things)
            alert(`You bought ${things} droids, you have ${balance} credits left"`)
        }
    }
