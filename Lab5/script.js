class Person {
  constructor(id, email, workMood, salary, isManager) {
    this.id = id;
    this.email = email;
    this.workMood = workMood;
    this.salary = salary >= 1000 ? salary : 1000;
    this.isManager = isManager;
    this.healthRate = 100;
  }

  sleep(hours) {
    if (hours === 7) this.workMood = "happy";
    else if (hours < 7) this.workMood = "tired";
    else this.workMood = "lazy";
  }

  eat(meals) {
    if (meals === 3) this.healthRate = 100;
    else if (meals === 2) this.healthRate = 75;
    else this.healthRate = 50;
  }

  buy(items) {
    if (items === 1) this.salary -= 10;
  }

  work(hours) {
    if (hours === 8) this.workMood = "happy";
    else if (hours > 8) this.workMood = "tired";
    else this.workMood = "lazy";
  }
}

class Office {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  getAllEmployees() {
    return this.employees;
  }

  getEmployee(empId) {
    const employee = this.employees.find((emp) => emp.id === empId);
    if (employee) {
      if (employee.isManager) {
        // Display all info except salary for managers
        const { id, email, workMood, isManager, healthRate } = employee;
        return { id, email, workMood, isManager, healthRate };
      } else {
        // Display all info for normal employees
        return employee;
      }
    }
    return null;
  }

  hire(employee) {
    this.employees.push(employee);
  }

  fire(empId) {
    this.employees = this.employees.filter((emp) => emp.id !== empId);
  }
}

const office = new Office("XYZ Corp");

function promptForEmployeeData() {
  const id = prompt("Enter employee ID: ");
  const email = prompt("Enter employee email: ");
  const workMood = "neutral"; // Assuming a default work mood
  const salary = parseInt(prompt("Enter employee salary: ")) || 1000;
  const isManager =
    prompt("Is the employee a manager? (yes/no): ").toLowerCase() === "yes";

  return new Person(id, email, workMood, salary, isManager);
}
let userInput;

while (userInput !== "q") {
  userInput = prompt(`    - For adding new employee, enter "add"
    - If manager, press "mngr"
    - If normal employee, press "nrml"
    - To get all employees, enter "getall"
    - To get employee details, enter "get"
    - To hire an employee, enter "hire"
    - To fire an employee, enter "fire"
    - To quit, enter "q"
    Enter your choice: `).toLowerCase();

  switch (userInput) {
    case "add":
      const newEmployee = promptForEmployeeData();
      office.hire(newEmployee);
      alert("Employee added successfully.");
      break;

    case "mngr":
    case "nrml":
      // Assuming employee ID is entered by the user
      const empId = prompt("Enter employee ID: ");
      const employee = office.getEmployee(empId);

      if (employee) {
        if (employee.isManager) {
          const { id, email, workMood, isManager, healthRate } = employee;
          alert(
            `Manager Details:\nID: ${id}\nEmail: ${email}\nWork Mood: ${workMood}\nManager: ${isManager}\nHealth Rate: ${healthRate}`
          );
        } else {
          const { id, email, workMood, salary, isManager, healthRate } =
            employee;
          alert(
            `Employee Details:\nID: ${id}\nEmail: ${email}\nWork Mood: ${workMood}\nSalary: ${salary}\nManager: ${isManager}\nHealth Rate: ${healthRate}`
          );
        }
      } else {
        alert("Employee not found.");
      }
      break;

    case "get":
      const empIdForDetails = prompt("Enter employee ID to get details: ");
      const employeeForDetails = office.getEmployee(empIdForDetails);

      if (employeeForDetails) {
        if (employeeForDetails.isManager) {
          const { id, email, workMood, isManager, healthRate } =
            employeeForDetails;
          alert(
            `Manager Details:\nID: ${id}\nEmail: ${email}\nWork Mood: ${workMood}\nManager: ${isManager}\nHealth Rate: ${healthRate}`
          );
        } else {
          const { id, email, workMood, salary, isManager, healthRate } =
            employeeForDetails;
          alert(
            `Employee Details:\nID: ${id}\nEmail: ${email}\nWork Mood: ${workMood}\nSalary: ${salary}\nManager: ${isManager}\nHealth Rate: ${healthRate}`
          );
        }
      } else {
        alert("Employee not found.");
      }
      break;

    case "getall":
      alert("All Employees: " + JSON.stringify(office.getAllEmployees()));
      break;

    case "hire":
      const newEmployeeToHire = promptForEmployeeData();
      office.hire(newEmployeeToHire);
      alert("Employee hired successfully.");
      break;

    case "fire":
      const empIdToFire = prompt("Enter employee ID to fire: ");
      office.fire(empIdToFire);
      alert("Employee fired successfully.");
      break;

    case "q":
      alert("Exiting the application. Goodbye!");
      break;

    default:
      alert("Invalid input. Please try again.");
  }
}