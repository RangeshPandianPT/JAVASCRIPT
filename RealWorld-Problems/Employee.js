function Employee(id,name,department,salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;	
}
const employeeDB = {};

function addEmployee(id, name, department, salary) {
    const employee = new Employee(id, name, department, salary);
    employeeDB[id] = employee;
    console.log("Employee with ID " + id + " added.");
}

function getEmployee(id) {
    const employees = Object.values(employeeDB);
    console.log("List of Employees: ");
    employees.forEach ((employee) => {
        console.log(`${employee.name},Department:${employee.department},Salary:${employee.salary}`);
    });
}

function getEmployeeDetails(id) {
    if (employeeDB[id]) {
        return Object.entries(employeeDB[id]);
    }
    return "Employee not found.";
}

function updateEmployee(id, name, department, salary) {
    if (employeeDB[id]) {
        if (name !== undefined) employeeDB[id].name = name;
        if (department !== undefined) employeeDB[id].department = department;
        if (salary !== undefined) employeeDB[id].salary = salary;
    }
    else {
        console.log("Employee not found.");
    }
}

function freezeEmployeeDB(id) {
    if (employeeDB[id]) {
        Object.freeze(employeeDB[id])
        console.log("Employee Data is frozen");
    }
    else {
        console.log("Employee not found.");
    }
}

function sealEmployeeDB(id) {
    if (employeeDB[id]) {
        Object.seal(employeeDB[id])
        console.log("Employee Data is sealed");
    }
    else {
        console.log("Employee not found.");
    }
}

addEmployee(1, "Alice", "HR", 50000);
addEmployee(2, "Bob", "IT", 60000);
addEmployee(3, "Charlie", "Finance", 70000);

console.log("\n");
getEmployee(); 

console.log("\n");
console.log("Details of Employees");
console.log(getEmployeeDetails(2));

console.log("Update Employee DEtails");
updateEmployee(2, "Bob", "IT", 65000);
console.log("After Update");
getEmployee();


console.log("\n");
console.log("Freezing Employee Data");
freezeEmployeeDB(2);
updateEmployee(2, "Bob", "IT", 70000); 

console.log("\n");
console.log("Sealing Employee Data");
sealEmployeeDB(3);
updateEmployee(3, "Charlie", "Finance", 75000);
getEmployee();