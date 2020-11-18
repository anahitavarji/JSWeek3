// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));                                                                                                                                                                    
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"



function cutPizzaSlices(pizzaSize){
    var pizza = pizzaSize;
    function cutPizza(sharing){
        var divide = pizza / sharing;
        return "Each person gets " + divide + " slices of pizza"
    }
    return cutPizza;
}


var pizzaSize = cutPizzaSlices(8);
var sharePizza = pizzaSize(2);
console.log(sharePizza);
var sharePizza = pizzaSize(3);
console.log(sharePizza);