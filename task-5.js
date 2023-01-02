console.log("Task 5 :");

let userCountry = prompt("Country of delivery?");
console.log(userCountry);
userCountry = userCountry.toLowerCase();
console.log(userCountry);
userCountry = userCountry[0].toUpperCase() + userCountry.slice(1);
console.log(userCountry);
 switch(userCountry){
    case "Китай":
        alert(`Cтоимость доставки в ${userCountry} 100 credits`);
        break;
    case "Чилі":
        alert(`Cтоимость доставки в ${userCountry} 250 credits`);
        break;
    case "Австралія":
        alert(`Cтоимость доставки в ${userCountry} 170 credits`);
        break;
    case "Індія":
        alert(`Cтоимость доставки в ${userCountry} 80 credits`);
        break;
    case "Ямайка":
        alert(`Cтоимость доставки в ${userCountry} 120 credits`);
        break;
    default:
        alert('У вашій країні доставка недоступна');
}