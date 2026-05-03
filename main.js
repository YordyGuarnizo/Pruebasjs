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
