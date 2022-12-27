//null caolescing operator in javascript (??)
//   that is used to proivide a default value of null or undefined

//In javascript the following values are consinder falsy: false,0,"" (and empty string) ,null, undefined and NaN.

let myVal=0;//0 is also a number
const myNumber=myVal||10;
const myNumber2=myVal??10;
console.log(" ~file:nullish.js:5 ~ myName:",myNumber)
console.log(" ~file:nullish.js:5 ~ myName:",myNumber2)