var result = 0;

while (true) {
    var operation = prompt("Enter the operation (sum, multiply, subtract, divide, modulus), or 'stop' to exit:");


    if (operation.toLowerCase() === 'stop') {
        alert("Calculator stopped. Final result: " + result);
        break;
    }


    var number = prompt("Enter a number:");


    number = parseFloat(number);


    if (!isNaN(number)) {
        switch (operation) {
            case "sum":
                result = result + number;
                break;
            case "multiply":
                result = result * number;
                break;
            case "subtract":
                result = result - number;
                break;
            case "divide":
                if (number !== 0) {
                    result = result / number;
                } else {
                    alert("Error: Cannot divide by zero.");
                }
                break;
            case "modulus":
                if (number !== 0) {
                    result = result % number;
                } else {
                    alert("Error: Cannot calculate modulus with zero.");
                }
                break;
            default:
                alert("Invalid operation. Please enter 'sum', 'multiply', 'subtract', 'divide', or 'modulus'.");
        }

        alert("Current result: " + result);
    } else {
        alert("Invalid input. Please enter a valid number or 'stop' to exit.");
    }
}
