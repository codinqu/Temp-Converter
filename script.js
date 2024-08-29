
let temperatureInput = document.getElementById("inputTemp");

//document.getElementById('inputTemp').value;

let tempUnit = document.getElementById("unitOfTemp");

//document.getElementById('unitOfTemp').value;

let result = document.querySelector("p");

let resultCalc = null;

let buttonClicked = document.querySelector("button");

buttonClicked.addEventListener("click", convertTemp);

let startTempVal;

function convertTemp() {

    startTempVal = temperatureInput.value
    
    if (tempUnit.value === 'C') {
        resultCalc = (startTempVal * 9/5) + 32; // c to f
    
        result.innerHTML = resultCalc.toFixed(2);
    } 
    else {
        resultCalc = (startTempVal - 32) * 5/9; // f to c

        result.innerHTML = resultCalc.toFixed(2);
    }
}

