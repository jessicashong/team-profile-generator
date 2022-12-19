const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        it('should return name of manager', () => {
            const manager = new Manager();
            const person = 'Khiem';
    
            manager.getName(person);
    
            expect(manager.name).toBe('Khiem');
        })
    })
    describe('getId', () => {
        it('should return id of new manager', () => {
            const manager = new Manager();
            const id = '234';

            manager.getId(id);
            
            expect(manager.id).toBe('234');
        })
    })
    describe('getEmail', () => {
        it('should return email of new manager', () => {
            const manager = new Manager();
            const email = 'khiem@email.com';

            manager.getEmail(email);

            expect(manager.email).toBe('khiem@email.com');
        })
    })
    describe('getRole', () => {
        it('should return role of new manager', () => {
            const manager = new Manager();
            const role = 'Manager';

            manager.getRole(role);

            expect(manager.role).toBe('Manager');
        })
    })
    describe('getOfficeNumber', () => {
        it('should return office number of new manager', () => {
            const manager = new Manager();
            const officeNumber = '0904';

            manager.getOfficeNumber(officeNumber);

            expect(manager.officeNumber).toBe('0904');
        })
    })
})