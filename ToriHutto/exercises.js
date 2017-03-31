EXERCISES JS4


function printStanding(GPA) {
	var result;
  if(GPA >= 2.0){
  	result= "Student is in good standing";
  } else {
  	result= "Student is on probation";
  }
  if(GPA >= 3.40 && GPA <=3.59){
  	result= result + " with cum laude";
  } else if (GPA >= 3.60 && GPA <=3.79){
  	result= result + " with magna cum laude";
  } else if (GPA >= 3.80 && GPA <= 4.00){
  	result= result + " with summa cum laude";
  }

		console.log(result);
}
printStanding(3.5);
printStanding(2.0);
printStanding(4.0);
printStanding(1.3);


2)
var i;
for(i=0; i <= 99; i = i + 3){
	console.log(i);
}



3)

var currentTime;
while( currentTime= new Date().valueOf()){
	var remainder= currentTime % 100;
  if (remainder == 0 ){
  	break;
  }
  console.log(currentTime);
}

4.) Leap years are defined as being a year that is divisible by 4, except for years which are divisible by 100 and not divisible 400.

For example:

//* 2004 is divisible by 4, and is not divisible by 100, so it's a leap year.
//* 2000 is divisible by 4, 100 and 400, so it's a leap year.
//* 1700 is divisible by 4 and 100, but not 400, so it's not a leap year.

//You will output all of the leap years from the year 0 to 2020 by doing the following steps:

//1. Write out pseudocode that describes the process you would need to go through to complete this requirement.
//2. Translate the pseudocode into real JavaScript that accomplishes the requirement.

for(var i = 0; i <2021; i++){
	if(i%4) && (i%400 == 0 || i%100 !=0)) {
		console.log()
	}
}



5.) A result variable has been declared for you, as well as a function named half. Call the half function with the number 100 and store the result in the result variable.


var result;

 function half(number){
 	 return number / 2;
 }

 result = half(100);

 console.log(result);





6.) Define a function called difference, with two parameters, that returns the difference between two values.

function difference ()

var result = difference(385, 142);

function difference(num1, num2){
	return num1 - num2;
 };

 var result = difference(385, 142);

 console.log(result);
