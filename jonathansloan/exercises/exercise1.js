function standing(gpa) {

	if (gpa >= 3.8) {

		return "student is in good standing with summa cum laude.";

	}

	else if (gpa >= 3.6) {

		return "student is in good standing with magna cum laude";
	
	}

	else if (gpa >= 3.4) {

		return "student is in good standing with cum laude.";

	}

	else if (gpa >= 2.5) {

		return "student is in good stamding";

	}

	else (gpa < 2.0) {

		return "student is on probation";
	}
}

console.log(standing(gpa))