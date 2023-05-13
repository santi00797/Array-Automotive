//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class MercurySedan extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numWheels, maxSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.numWheels = numWheels;
        this.maximumPassengers = maximumPassengers;
        this.passengers = passengers;
        this.numWheels = numWheels;
        this.maxSpeed = maxSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
        this.started = false;
    }
    loadPassenger() {
        if (this.passengers < this.maximumPassengers) {
            this.passengers++;
            console.log("Passenger loaded");
        } else {
            console.log("Cannot load any more passengers");
        }
    }
    Start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    scheduleServiceMethod() {
        if (this.mileage > 30000) {
            this.scheduleService = true;
        } else {
            this.scheduleService = false;
        }
        return this.scheduleService;
    }
}

let exampleVehicle = new MercurySedan("Mercury", "Sedan", "1965", "color", "mileage", 5, 0, 4, 100, 100, false);
console.log(exampleVehicle)


console.log(exampleVehicle.scheduleServiceMethod())




//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
