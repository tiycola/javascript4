1) d. function
2) a. if
3) b. The conditional expression evaluates to false.
4) c. break
5) d. All of the above
6) d. sayHello("Fred")


1.

var gpa;

if (gpa >= 4.00) {
    honor = "Cum Laude";
    standing = "Good standing";
} else if (gpa >= 3.79) {
    honor = "Magna Cum Laude";
    standing = "Good standing"
} else if (gpa >= 3.59) {
    honor = "Summa Cum Laude";
    standing = "Good standing";
} else if (gpa >= 2.0) {
    standing = "Good standing";
    honor = "";
} else {
    honor = "Academic probation";
    standing = "Bad standing"
};
console.log(honor);
console.log(standing);


2.

for (var i=0; i <= 100; i+=3)
{
      document.write(i);
}

3.

Create a loop that starts at 0 and counts to 2100.
If year is divisible by 4 and 100, console log it.

for (var i=0; i <= 2200; i++)
{
if ((var % 4 == 0) && (var % 100 != 0)) || (var % 400 == 0)); {
  document.write(i)
  document.write("</br>");
};
