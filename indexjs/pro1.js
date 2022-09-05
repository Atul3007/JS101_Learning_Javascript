//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties
let yob=23;
if(yob>=13&&yob<=19){
  console.log("Teenage");
} else if(yob>=20 && yob<=29){
  console.log("Twenties");
}else{
  console.log("Age limit is not according to our data");
}