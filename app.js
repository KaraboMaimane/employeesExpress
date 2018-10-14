const _ = require('lodash');
const yargs = require('yargs');//creating yargs
const fs = require('fs');

const employee = require('./employee');

const argv = yargs.argv;//getting the arguments
var command = argv._[0];//setting up the command

if(command === 'add'){
     employee.addEmployee(argv.title, argv.body);
}else if(command === 'list'){

}else if(command === 'get'){

}else if(command === 'remove'){

}else{
     console.log('Command not recognized');
}