//importing all our required modules
const fs = require('fs');

//setting up all our functions
var fetchEmployees = () =>{
     //we are trying our file if it will return any errors
     try{
          var employeesString = fs.readFileSync("employees.json");
          return JSON.parse(employeesString);
     }catch(e){
          return [];
     }
}

var saveEmployees = (employees) =>{
     fs.writeFileSync('employees.json', JSON.stringify(employees));
}

var addEmployee = (id, fullname) => {
     var employees = fetchEmployees();
     var employee = {
          id,
          fullname
     }

     //searching through the array if there are any duplicate ids
     var duplicates = employees.filter(employee =>{
          return employee.id === id;
     })

     //if there are no duplicates, add to array and then to text file
     if(duplicates.length === 0){
          employees.push(employee);
          saveEmployees(employees);
          return employee;
     }
}

var getAll = () =>{

}

var removeEmployee = (id) =>{

}

var getEmployee = (id, fullname) =>{

}

//we are exporting all of our functions
module.exports = {
     addEmployee,
     getAll,
     removeEmployee,
     getEmployee
}