const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){

    }
    getGithub();
    getRole();//overridden to return 'Engineer'
}