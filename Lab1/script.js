firstname=prompt("Enter Your First Name");
lastname=prompt("Enter your Last Name");
result=prompt(`Full Name : ${firstname} ${lastname} : Correct?`)

if(result=="yes")
{
	let cdate= 2024;
	let byear =prompt("Enter Your Birth Year");
	let age=Number(cdate-byear);
	alert(`Welcome ${firstname} ${lastname} you're ${age} years old`);
}

//Assignment 2


alert("Hi,This is the first release of a calculator that only has a summation feature.");
num1=Number(prompt("Enter First Number"));
num2=Number(prompt("Enter Second Number"));
alert(`The Result is : ${num1} + ${num2} = ${num1+num2}`);
