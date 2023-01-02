console.log("Task 3 :");
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Password console admin:');

if(ADMIN_PASSWORD == message){
    alert("Welcome admin!")
} else if(message == null){
    alert("Canceled by user")
} else{
    alert("Access denied, incorrect password")
}