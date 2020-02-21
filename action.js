function hi() {
alert("Welcome to Ken and Joes Trucks Emporium!");
}

function purchase() {
var truck = prompt('How many truck do you want to buy?') 
var greeting; 

if (truck >= 5) {
    greeting = 'Great! They are yours!';
} else if (truck < 18) {
    greeting = 'Sorry, can \'t sell you a truck!';
} else {
    greeting = 'Please enter an amount.';
}
for (var i = 0; i < truck; i = i + 1){ document.write('yeah!')};
return greeting;
}



function truckType() {
var typez = prompt('Can you drive a manual truck?');
while (typez !== 'y' && typez !== 'n') {
    typez = prompt('Please enter "y" or "n" DO NOT SPELL IT OUT!');
}
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