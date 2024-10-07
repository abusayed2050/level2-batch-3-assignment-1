{
    /* 
        Problem 8:
            Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

        // Sample Input:
                new Car("Toyota", "Corolla", 2020);

        // Sample Output: 
                "Your car model is:  2020 Toyota Corolla"
    */

        class Car {
            constructor(public brand: string, public model: string, public year: number){

            }

            mycar(){
                console.log(`Your car model is: ${this.year} ${this.brand} ${this.model}`);
            }
        }

        const myNewCar = new Car("Toyota", "Corolla", 2020);
        myNewCar.mycar();

}