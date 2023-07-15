// JavaScript code to perform math operations
window.onload = function() {
    var num1 = 10;
    var num2 = 5;

    // Subtraction
    var subtractionResult = num1 - num2;
    var subtractionElement = document.createElement("p");
    subtractionElement.textContent = "Subtraction: " + subtractionResult;
    document.body.appendChild(subtractionElement);

    // Multiplication
    var multiplicationResult = num1 * num2;
    var multiplicationElement = document.createElement("p");
    multiplicationElement.textContent = "Multiplication: " + multiplicationResult;
    document.body.appendChild(multiplicationElement);

    // Division
    var divisionResult = num1 / num2;
    var divisionElement = document.createElement("p");
    divisionElement.textContent = "Division: " + divisionResult;
    document.body.appendChild(divisionElement);

    // Modulus
    var modulusResult = num1 % num2;
    var modulusElement = document.createElement("p");
    modulusElement.textContent = "Modulus: " + modulusResult;
    document.body.appendChild(modulusElement);
  };