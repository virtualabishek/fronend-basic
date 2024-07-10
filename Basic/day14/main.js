// Javascript Classes :)


class Pizza {
    constructor(pizzaType) 
    {
        this.type = pizzaType;
        this.size = "Medium";
        this.crust = "Original"
    }
    bake() {
        console.log(`Baking ${this.size}, ${this.type} ${this.crust} crust pizza.`);
    }
}

const myPizza = new Pizza("papperoni");
myPizza.bake()