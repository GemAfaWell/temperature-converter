//Write your pseudo code first! Then write your code!

// create a function to convert the temperature to Fahrenheit
let convertF = () => {
    // get the value of the input
    let temp = document.querySelector('#celsius').value;
    // convert the temperature
    temp = temp * 9/5 + 32;
    // display the converted temperature
    document.querySelector('#convertedF').innerHTML = `${temp} F`;
}

// create an event listener for conversions
let convertButtonF = document.querySelector('#convertF');
convertButtonF.addEventListener('click', convertF);

// create a function to convert the temperature to Celsius
let convertC = () => {
    // get the value of the input
    let temp = document.querySelector('#fahrenheit').value;
    // convert the temperature
    temp = (temp - 32) * 5/9;
    // display the converted temperature
    document.querySelector('#convertedC').innerHTML = `${temp} C`;
}

// create an event listener for conversions
let convertButtonC = document.querySelector('#convertC');
convertButtonC.addEventListener('click', convertC);

// create a function to convert the temperature to Kelvin
let convertK = () => {
    // get the value of the input
    let temp = document.querySelector('#celsius').value;
    // convert the temperature
    temp = temp * 1 + 273.15;
    // display the converted temperature
    document.querySelector('#convertedK').innerHTML = `${temp} K`;
}

// create an event listener for conversions
let convertButtonK = document.querySelector('#convertK');
convertButtonK.addEventListener('click', convertK);

// create a function to play "Tomorrow" from Annie
let playAnnie = () => {
	let audio = document.getElementById("annie");
	audio.play();
}

// create an event listener for the play button, which will be the "Temperature Converter" title
let playButton = document.querySelector('#convTitle');
playButton.addEventListener('click', playAnnie);
