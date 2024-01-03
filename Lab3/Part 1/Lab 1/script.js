var username = prompt("Enter your username:");
var password = prompt("Enter your password:");

if (username === "admin" && password === "421$$") {
    alert("Welcome! Login successful");
} else {
    var errorMessage = "Incorrect ";

    if (username !== "admin") {
        errorMessage += "username";
    } else if (password !== "421$$") {
        errorMessage += "password";
    }

    alert(errorMessage);
}
