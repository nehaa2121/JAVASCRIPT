let employeeName = "Neha Kamble";
let basicSalary = 25000;
let bonus = 5000;
let tax = 2000;

let totalSalary = basicSalary + bonus;
totalSalary = totalSalary - tax;

document.getElementById("name").innerHTML = "Employee Name: " + employeeName;
document.getElementById("salary").innerHTML = "Basic Salary: " + basicSalary;
document.getElementById("bonus").innerHTML = "Bonus : " + bonus;
document.getElementById("total").innerHTML = "Total Salary : " + totalSalary;
document.getElementById("tax").innerHTML = "Final Salary After Tax : " + totalSalary;
