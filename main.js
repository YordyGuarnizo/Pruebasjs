/*

const markWeigth = 78;
const johnWeigth = 95;

const markHeigth = 1.69;
const johnHeigth = 1.88;

const markBMI = markWeigth / markHeigth ** 2;
const johnBMI = johnWeigth / johnHeigth ** 2;

console.log(markBMI, johnBMI, markBMI > johnBMI);

*/

/*
const age = 14;

if (age >= 18) {
  console.log("Sarah could take the drivers lessons");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah needs to wait ${yearsLeft} years to take lessons`);
}

const birthYear = 1998;
let century;

if (birthYear >= 2001) {
  century = "21st";
} else {
  century = "20th";
}

console.log(century);

const markWeigth = 78;
const johnWeigth = 95;

const markHeigth = 1.69;
const johnHeigth = 1.88;

const markBMI = markWeigth / markHeigth ** 2;
const johnBMI = johnWeigth / johnHeigth ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark BMI(${markBMI}) is higher than John BMI(${johnBMI})`);
} else {
  console.log(`John BMI(${johnBMI}) is higher than Mark BMI(${markBMI})`);
}

console.log(typeof ("5" * 2));

const age2 = 22;

if (age2 === 23) {
  console.log("23 is good");
} else if (age2 !== 23) {
  console.log("what?");
} */

/*

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("She could do the driving");
} else {
  console.log("NOooooooooooooo");
}

const dolphinScore1 = 88;
const dolphinScore2 = 50;
const dolphinScore3 = 11;

const koalaScore1 = 123;
const koalaScore2 = 101;
const koalaScore3 = 112;

const averageDolphin = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const averageKoala = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

const minimumScore = 100;

console.log(averageDolphin, averageKoala);

if (averageDolphin > averageKoala && averageDolphin >= minimumScore) {
  console.log(`Dolphin win with a score of ${averageDolphin}`);
} else if (averageKoala > averageDolphin && averageKoala >= minimumScore) {
  console.log(`Koala wins with a score of ${averageKoala}`);
} else if (averageDolphin === averageKoala) {
  console.log(`Draw, the average score for both teams was ${averageDolphin}`);
} else {
  console.log(
    `No one wins, the minimum score of ${minimumScore} was not accomplished`,
  );
}

*/

/*
const day = "monday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

*/

/* const age = 23;

age >= 18
  ? console.log("I like to drink water")
  : console.log("I cannot drink water");

const bill = 55;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const finalValue = bill + tip;

console.log(`Bill: ${bill}`);
console.log(`Tip: ${tip}`);
console.log(`Total: ${finalValue}`);
*/

/*
function logger() {
  console.log("My name is Yordy");
}

logger();

//Function declaration

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(3, 6));

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

//Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

//Arrow function

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1990));

//If it has more complex code we need to add the {} and also the return
//If we have multiple parameters we need to add the ()

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Yordy"));
*/

/*
function curFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = curFruitPieces(apples);
  const orangePieces = curFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}
*/

/*
function getTheElementValue(value) {
  return document.getElementById(value).value;
}

function addition(value1, value2) {
  return value1 + value2;
}

function substraction(value1, value2) {
  return value1 - value2;
}

function multiplication(value1, value2) {
  return value1 * value2;
}

function division(value1, value2) {
  return value1 / value2;
}

function printValues(box, value1, value2, value3, value4) {
  return (document.getElementById(box).innerHTML =
    `El resultado de ${value1} ${value2} ${value3} es igual a ${value4}`);
}

function calculate() {
  const numberOne = parseInt(getTheElementValue("num1"));
  const numberTwo = parseInt(getTheElementValue("num2"));
  const operator = getTheElementValue("operacion");
  let results;

  if (operator === "+") {
    results = addition(numberOne, numberTwo);
    printValues("resultado", numberOne, operator, numberTwo, results);
  } else if (operator === "-") {
    results = substraction(numberOne, numberTwo);
    printValues("resultado", numberOne, operator, numberTwo, results);
  } else if (operator === "*") {
    results = multiplication(numberOne, numberTwo);
    printValues("resultado", numberOne, operator, numberTwo, results);
  } else if (operator === "/" && numberTwo !== 0) {
    results = division(numberOne, numberTwo);
    printValues("resultado", numberOne, operator, numberTwo, results);
  } else {
    document.getElementById("resultado").innerHTML = "No se puede dividir en 0";
  }
}
*/

/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return retirement;
  //return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Yordy"));
*/

/*
const calcAverage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;

let scoreDolphin = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

function checkWinner(avrDolphin, avrKoalas) {
  if (avrDolphin >= avrKoalas * 2) {
    console.log(`Dolphin ${avrDolphin} wins, Koalas ${avrKoalas}`);
  } else if (avrKoalas >= avrDolphin * 2) {
    console.log(`Koalas ${avrKoalas} wins, Dolphin ${avrDolphin}`);
  } else {
    console.log("No one wins");
  }
}

checkWinner(scoreDolphin, scoreKoalas);
*/

/*
const friends = ["Michael", "Steven", "Marcos"];
console.log(friends);

console.log(friends[0]); //Primer valor
console.log(friends[2]); //ultimo valor
console.log(friends.length); //Numero de elementos en el array
console.log(friends[friends.length - 1]); //El -1 porque el array es 0 based, pero el length no

friends[2] = "Otto"; //Se puede reemplazar partes de un array, pero no todo el array, por estar en una constante
console.log(friends);

const number = 80;
const yordy = ["Yordy", "Guarnizo", 2037 - 1990, "teacher", friends, number]; //Podemos agregar todo tipo de expresiones
console.log(yordy);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1993, 1999, 2000, 2025];

const age1 = calcAge(years[0]);
const age3 = calcAge(years[years.length - 1]); //Para calcular los valores, necesitamos decirle cual en el array vamos a usar
console.log(age1, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
//Podemos crear otro array, con los resultados de las funciones
*/

//Arrays
/*
const friends = ["Michael", "Steven", "Marcos"];

//Add elements
const newLength = friends.push("Jay"); //Agregar un valor, lo hara al final
// si lo agregamos a una constante nos muestra es el numero de elementos en el array
console.log(newLength);

friends.unshift("John"); //Agrega un valor, al comienzo del array
console.log(friends);

//Remove elements
friends.pop(); //Delete elements, there is no need to add any argument
//If we add that in a variable, it will show the element that was deleted

console.log(friends);

friends.shift(); //Delete the first item

//Find elements
friends.unshift("Santos");
console.log(friends);
console.log(friends.indexOf("Steven")); //Nos dice en que parte del array esta

console.log(friends.includes("Steven")); //Busca si esta en el array, en este caso esta, por lo tanto es true
console.log(friends.includes("Bob")); //No hay ningun Bob, arroja false
//Funciona con strict, quiere decir que si uno pone un number 23, y busca '23', arrojara false
*/

/*
const calTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44];
const tips = [
  calTip(bills[0]),
  calTip(bills[1]),
  calTip(bills[bills.length - 1]),
];
const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[bills.length - 1] + tips[bills.length - 1],
];

console.log(tips, totals);
*/

/*
const jonas = {
  firstName: "Yordy",
  lastName: "Guarnizo",
  age: "26",
  job: "Call Center Agent",
  friends: ["Carlos", "Javier", "Hernando"],
};

console.log(jonas);
console.log(jonas.lastName); //Traer el key lastName e imprimir el value
console.log(jonas["lastName"]); //Lo mismo, pero en este se pueden poner expresiones

const nameKey = "Name";

console.log(jonas["first" + nameKey]); //first + name Key = firstName
console.log(jonas["last" + nameKey]); // Same as above
*/

//const interestedIn = prompt(
//  "What do you want to know about Jonas? Choose between firstName, lastName, job and friends",
//);

// If and else where the machine is going to see if something exist or not
/*
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}
*/

// Add elements into the object

/*
jonas.location = "Colombia"; //Agregar esto al objeto
jonas["twitter"] = "@dev.com"; //Agregarlo al objeto pero con otra forma

console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`,
);
*/

const jonas = {
  firstName: "Yordy",
  lastName: "Guarnizo",
  birthYear: "1999",
  job: "Call center agent",
  friends: ["Carlos", "Javier", "Miler"],
  hasDrivenLicense: true,

  /*
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  }, */

  // El objeto tiene el this, es decir podemos poner lo que esta en el objeto
  // Al poner this.bithYear, no necesitamos un parametro, vamos directamente al jonas.bithYear

  /*
  calcAge: function () {
    return 2037 - this.birthYear;
  },
  */

  calcAge: function () {
    this.age = 2037 - this.birthYear; //Creamos otra key para el objeto
    return this.age; //Lo devolvemos
  },

  getSummary: function () {
    console.log(
      `Yordy is a ${this.age} years old ${this.job}, and he has ${this.hasDrivenLicense ? "a drivers license" : "no drivers license"}`,
    );
  },
};

//console.log(jonas.calcAge()); //llamar el metodo
//console.log(jonas["calcAge"](1999)); // llamar el metodo pero con el otro formato

console.log(jonas.calcAge()); //Ejecutamos el metodo
console.log(jonas.age); //Ya se puede llamar en todo lado

jonas.getSummary();

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  heigth: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.heigth * this.heigth);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  heigth: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.heigth * this.heigth);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi);
console.log(john.bmi);

console.log(
  `${mark.bmi > john.bmi ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName} (${john.bmi})` : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})`}`,
);
