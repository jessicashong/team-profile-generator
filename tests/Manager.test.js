const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        it('should return name of manager', () => {
            const manager = new Manager("Khiem", "234", "khiem@email.com", "0904");
                
            expect(manager.name).toBe('Khiem');
        });
    });
    describe('getId', () => {
        it('should return id of new manager', () => {
            const manager = new Manager("Khiem", "234", "khiem@email.com", "0904");
            
            expect(manager.id).toBe('234');
        });
    });
    describe('getEmail', () => {
        it('should return email of new manager', () => {
            const manager = new Manager("Khiem", "234", "khiem@email.com", "0904");

            expect(manager.email).toBe('khiem@email.com');
        });
    });
    describe('getOfficeNumber', () => {
        it('should return office number of new manager', () => {
            const manager = new Manager("Khiem", "234", "khiem@email.com", "0904");

            expect(manager.officeNumber).toBe('0904');
        });
    });
    describe('getRole', () => {
        it('should return role of new manager', () => {
            const role = "Manager";

            expect(role).toBe('Manager');
        });
    });
});