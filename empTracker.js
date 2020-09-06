const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const path = require('path');
const Database = require("./db")

const db = new Database({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "your password",
    database: "employeeDB"
});


function runApp() {
    inquirer.prompt({
        name: "mainmenu",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "Edit Employeee Info",
            "View Roles",
            "Edit Roles",
            "View Departments",
            "Edit Departments",
            "Exit"
        ]
    }).then(responses => {
        switch (responses.mainmenu) {
            case "View All Employees":
                showEmployeeSummary();
                break;
            case "Edit Employeee Info":
                editEmployeeOptions();
                break;
            case "View Roles":
                showRoleSummary();
                break;
            case "Edit Roles":
                editRoleOptions();
                break;
            case "View Departments":
                showDepartments();
                break;
            case "Edit Departments":
                editDepartmentOptions();
                break;
            case "Exit":
                connection.end();
                break;
        }
    });
}



runApp();

