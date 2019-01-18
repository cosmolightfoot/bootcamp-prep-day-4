//eslint-disable-next-line
function greet() {
    //fetches input and input value from the html input elements
    var firstNameInput = document.getElementById('first-name').value;
    var lastNameInput = document.getElementById('last-name').value;
    //creates a string from those inputs
    var greeting = 'Hello ' + firstNameInput + " " + lastNameInput + '!';
    //links new variable to the element where text should appear
    var displayGreeting = document.getElementById('display-greeting');
    //displays greeting
    displayGreeting.textContent = greeting;
}
