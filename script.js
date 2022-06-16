console.log("hello");
// adat típusok js ben :
// primitiv adattípusok:string,number,boolean,null,undefined
// array [] object ()

let string = "This is a string"

let newString = string.toUpperCase()

console.log(newString.length);

// instance properties of string in console
console.dir(String);

const user = {
    name: "Alexandra",
    age: 32
}
// tudjuk is hogy object
console.log(typeof user);
console.dir(user)
console.log(user.name);
console.log(user ["age"]);

const pizza = {
    name: "Cotto e funghi",
    price: 1800,
    details: function () {
        console.log(this.name);
    }
}
pizza.details()
function createPizza (name,price){
    return {name: name , price: price}
}

let pizza1 = createPizza("Maradona",1600)
console.log(pizza1);


const pizzaObj =  new Object();
pizzaObj.name = "Piedone"

console.log(pizzaObj);

class Pizza {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    details(){
        console.log(this.name,this.price);
    }
    
}

const lecsos =  new Pizza("lecsó",1300);
console.log(lecsos);
lecsos.details()

const inyenc = new Pizza("ínyenc",2300);
console.log(inyenc);

let params = ["kolbász",1900]

const kolbaszos = new Pizza(...params)
console.log(kolbaszos);

