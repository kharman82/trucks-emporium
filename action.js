function hi() {
alert("Welcome to Ken and Joes Trucks Emporium!");
}

function age() {
var age = prompt('What is your age?') 
var greeting; 

if (age >= 18) {
    greeting = 'Great! Age Verrified!';
} else if (age < 18) {
    greeting = 'Sorry, can \'t sell you a truck!';
} else {
    greeting = 'please enter an age';
}
return greeting;
}


function typez() {
var typez = prompt('Can you drive a manual truck?')
var response;

if (typez == 'y') {
    response = 'You ROCK!';
} else if (typez == 'n') {
    response = 'Get a new career!';
}  else {
    response = 'Enter a Respnse NOW!';
}
return response;
}

function txt() {
var txt;
var c = confirm("Answer!")
  if (c == true) {
        txt = "Thank God";
} else {
        txt = "Press Something!";
}
return txt;
}