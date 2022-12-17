const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        
    }
    getRole();//overridden to return 'Manager'

}