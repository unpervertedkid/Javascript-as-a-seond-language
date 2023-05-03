class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

class ElectricCar extends Car{
    constructor(doors, engine, color, batterySize) {
        super(doors, engine, color);
        this.batterySize = batterySize;
        this.wheels = 4;
    }

    averageMilesPerCharge() {
        return this.batterySize * 4;
    }
}

class SUV extends Car{
    #brand;
    constructor(doors, engine, color, brand) {
        super(doors, engine, color);
        this.#brand = brand;
        this.wheels = 4;
        this._ac = true;
    }

    getBrand() {
        return "This SUV is a " + this.#brand + "!";
    }

    get getAc() {
        return this._ac;
    }

    set setAc(value) {
        this._ac = value;
    }
}

const rangeRoverEvoque = new Car(4, 'V8', 'black');
const teslaModel3 = new ElectricCar(4, 'electric', 'red', 100);
const audiQ5 = new SUV(4, 'V6', 'white','Audi');

console.log(rangeRoverEvoque);
console.log(rangeRoverEvoque.carStats());
console.log(teslaModel3);
console.log(teslaModel3.averageMilesPerCharge() + ' miles per charge');
console.log(audiQ5);
console.log(audiQ5.getBrand());
console.log(audiQ5.carStats());

audiQ5.setAc = false;
console.log("Is the AC on? " + audiQ5.getAc);

let cars = [rangeRoverEvoque, new Car(2, 'V4', 'blue')];
console.log(Car.totalDoors(...cars));