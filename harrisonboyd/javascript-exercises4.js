//1. You are working for a state university and are tasked with writing software to determine the academic standing and honors recognition of students. The rules are:
// Standings:

// - 2.0 or higher - good standing
// - less than 2.0 - academic probation

// Honors recognitions:

// - 3.40 to 3.59 - cum laude
// - 3.60 t0 3.79 - magna cum laude
// - 3.80 to 4.00 or higher - summa cum laude

// Given a GPA, your job is to print whether or not the student is in good standing. If the student has earned honors recognitions print those out too.

// For example:

// - A GPA of 2.5 prints "Student is in good standing".
// - A GPA of 1.9 prints "Student is on probation".
// - A GPA of 3.6 prints "Student is in good standing with magna cum laude".


function goodStanding(avg){

		if(avg >= 3.8){

			return "The student is in good standing with summa cum laude."

		} else if ( avg >= 3.6 && avg < 3.8){

			return "The student is in good standing with magna cum laude."

		} else if( avg >= 3.4 && avg < 3.6){

			return "The student is in good standing with cum laude."

		} else if( avg >= 2.0 && avg < 3.4){

			return "The student is in good standing."

		} else { 

			return "The student is on probation."

		}

};

console.log(goodStanding(1.5));


//2. Loop from 0 to 99 and output the numbers that are multiples of 3. Do not use conditional statements. IE: 0, 3, 6, 9, 12, etc...

for(var i = 0; i <= 99; i+=3)

	console.log(i)








//3. Your job is to write a loop that outputs the timestamp continuously until the timestamp is cleanly divisible by 100. In other words, the time will be printed continuously until we find a time that has milliseconds of 00.

var currentTime = new Date().valueOf();


while ( currentTime % 100 != 0){
	console.log(new Date().valueOf());
	currentTime = new Date().valueOf();
};



//4. Leap years are defined as being a year that is divisible by 4, except for years which are divisible by 100 and not divisible 400.
// For example:

// * 2004 is divisible by 4, and is not divisible by 100, so it's a leap year.
// * 2000 is divisible by 4, 100 and 400, so it's a leap year.
// * 1700 is divisible by 4 and 100, but not 400, so it's not a leap year.

// You will output all of the leap years from the year 0 to 2020 by doing the following steps:

// 1. Write out pseudocode that describes the process you would need to go through to complete this requirement.
// You must first loop through every year between 0 and 2020. If the number is divisible by 4 and 400 but not 100 then it would work. so if the index in the for loop which is declared i, if i%4 == 0 AND i%400 == 0 OR i%100 !== 0 then the number works. 

// 2. Translate the pseudocode into real JavaScript that accomplishes the requirement.




for(var i = 0; i < 2021; i++){
	if( (i%4 == 0) && (i%400 == 0 || i%100 !== 0) ) {
  	console.log(i);
		}
};






//5. A result variable has been declared for you, as well as a function named half. Call the half function with the number 100 and store the result in the result variable.

var result;

function half(number){
  return number / 2;
}

half(100) = result

//6. Define a function called difference, with two parameters, that returns the difference between two values.

// define the function here

var result = difference(385, 142);

console.log(result);

function difference(num1, num2){
	return num1 - num2
}

