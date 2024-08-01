// Javascript Classes :)


class Pizza {
    constructor(pizzaType) 
    {
        this.type = pizzaType;
        this.size = "Medium";
        this.crust = "Original"
    }
    get pizzaCrust() {
        return this.crust;
    }
    set pizzaCrust(pizzaCrust){
        this.pizzaCrust = pizzaCrust;
    }
    bake() {
        console.log(`Baking ${this.size}, ${this.type} ${this.crust} crust pizza.`);
    }
}
myPizza.pizzaCrust = "thin";
const myPizza = new Pizza("papperoni");
myPizza.bake()