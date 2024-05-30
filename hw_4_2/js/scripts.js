let number = prompt("Enter three digit number");

if(number.charAt(0) === number.charAt(1) && number.charAt(0) === number.charAt(2)) {
    alert(`all numbers are the same`);
} else if(number.charAt(0) === number.charAt(1) || number.charAt(0) === number.charAt(2) || number.charAt(1) === number.charAt(2)) {
    alert(`there are identical numbers`);
} else {
    alert(`no identical numbers`);
}