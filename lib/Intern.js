const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){

    }
    getSchool();
    getRole();//overrides to return 'Intern'
}