//4. Leap years are defined as being a year that is divisible by 4, except for years which are divisible by 100 and not divisible 400.
For example:

// * 2004 is divisible by 4, and is not divisible by 100, so it's a leap year.
// * 2000 is divisible by 4, 100 and 400, so it's a leap year.
// * 1700 is divisible by 4 and 100, but not 400, so it's not a leap year.

// You will output all of the leap years from the year 0 to 2020 by doing the following steps:

// 1. Write out pseudocode that describes the process you would need to go through to complete this requirement.
-Leap years are divisible by 4, (leapyear % 4 == 0) is true.
-Leap years are true when %4==0 and %100 !== 0.
-Leap years are true when %4 && !%100 && %400.

4 && (400 || !100) 
// 2. Translate the pseudocode into real JavaScript that accomplishes the requirement.

var years = [];
for (var i=0; i<2021; i++) {
	if ( (i%4 == 0) && (i%400 == 0 || i%100 !== 0) ) {
		years.push(i);
	}
}

console.log(years);




