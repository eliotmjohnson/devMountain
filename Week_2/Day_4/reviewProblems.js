/*
    Create a variable called myGarage.
    Set it equal to a value of an array.
    Inside the array, create 3 car objects.
    The objects should have the following properties:
    Make, Model, Color, Year, Price
*/

const myGarage = [
  {
    Make: "Mazda",
    Model: "6",
    Color: "Black",
    Year: "2015",
    Price: 30000,
  },
  {
    Make: "Mazda",
    Model: "3",
    Color: "White",
    Year: "2017",
    Price: 37000,
  },
  {
    Make: "Mazda",
    Model: "2",
    Color: "Green",
    Year: "2019",
    Price: 15000,
  },
];

/*
    Using the objects you just created,
    use the .reduce() method to calculate
    the total value of your cars.
*/
const totalValue = myGarage.reduce((acc, curr) => acc + curr["Price"], 0);

// console.log(totalValue);

/* 
    Access the value of your third car
    and set the color property equal to itself,
    and use the .replace() method to change the
    color of the car.
*/
myGarage[2]["Color"] = "Red";
myGarage[1]["year"] = "1995";
// console.log(myGarage);

/*
    Your cars depreciate in value by 5% each year.
    Write a function called valueOverTime.
    This function should receive 3 parameters:
    totalValue, valueDrop, and years
    Inside the function, write an equation
    which calculates the new total value after
    years of depreciation.

    Return the new total value.
    Create a variable called newTotal and set it
    equal to your function invoked -- pass in your
    original total, the depreciation amount, and
    an amount of years passed.

    Note: For the depreciation amount, pass the
    percentage as a decimal. IE: 5% = 0.05
*/

const valueOverTime = (totalValue, valueDrop, years) => {
  for (let i = 1; i <= years; i++) {
    totalValue = totalValue - totalValue * valueDrop;
  }
  return totalValue;
};

let newTotal = valueOverTime(myGarage[0]["Price"], 0.05, 8);

console.log(newTotal);

/*
    Create a class called Car.
    Using the same properties as your objects,
    create a constructor for the class.
    Additionally, create a property called drivers.
    This property should be an array, and should be
    passed as an array when you instantiate the class.
    Use the spread operator to insert the constructor
    array into the this.drivers array.

    Next, create a method called addDriver.
    This method should receive one parameter: driver
    Access the drivers property of your class,
    and push the new driver into the array.

    Finally, create another method called inspection.
    This method should log a string to the console:
    `This car is driven by ${drivers}`
*/

class Car {
  constructor(Make, Model, Color, Year, Price, Drivers) {
    this.Make = Make;
    this.Model = Model;
    this.Color = Color;
    this.Year = Year;
    this.Price = Price;
    this.Drivers = Drivers;
  }
  addDriver(driver) {
    this.Drivers.push(driver);
  }
  inspection() {
    console.log(`This car is driven by ${this.Drivers}`);
  }
}

/*
    Create a new instance of the class into
    a variable, passing in arguments of your choice.
    Remember that the drivers argument needs to 
    receive an array.
*/
const newCar = new Car("Kia", "Soul", "White", "2019", 16000, [
  "Eliot",
  "Shannon",
]);

newCar.addDriver("Kaiya");

// console.log(newCar);

// newCar.inspection();

/*
    Using the addDriver method, add a new driver
    to your car.

    Then use the inspection method to check if
    it worked!
*/
