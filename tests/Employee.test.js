const Employee = require('../lib/Employee');
// const employee = new Employee('Jess', '123', 'jess@email.com');

describe('Employee', () => {
    describe('getName', () => {
        it('should return name of new employee', () => {
            const employee = new Employee();
            const person = 'Jess';

            employee.getName(person);

            expect(employee.name).toBe('Jess');
        })
    })
    describe('getId', () => {
        it('should return id of new employee', () => {
            const employee = new Employee();
            const id = '123';

            employee.getId(id);
            
            expect(employee.id).toBe('123');
        })
    })
    describe('getEmail', () => {
        it('should return email of new employee', () => {
            const employee = new Employee();
            const email = 'jess@email.com';

            employee.getEmail(email);

            expect(employee.email).toBe('jess@email.com');
        })
    })
    describe('getRole', () => {
        it('should return role of new employee', () => {
            const employee = new Employee();
            const role = 'Employee';

            employee.getRole(role);

            expect(employee.role).toBe('Employee');
        })
    })
})

