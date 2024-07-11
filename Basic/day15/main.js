class Pizza {
    constructor(pizzaType, pizzaSize) {
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "Original"
    }
    get pizzaCrust(pizzaCrust) {
        return this.crust;
    }


    bake() {
        console.log(`Baking a ${this.size} size ${this.type}  pizza on ${this.crust}`);
    }
}
const myPizza = new Pizza("Butter", "Small");
myPizza.bake();

console.log(myPizza.type)