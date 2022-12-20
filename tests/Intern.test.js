const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        it('should return name of intern', () => {
            const intern = new Intern("Tim", "345", "tim@email.com", "UTSA");
    
            expect(intern.name).toBe('Tim');
        });
    });
    describe('getId', () => {
        it('should return id of new intern', () => {
            const intern = new Intern("Tim", "345", "tim@email.com", "UTSA");
            
            expect(intern.id).toBe('345');
        });
    });
    describe('getEmail', () => {
        it('should return email of new intern', () => {
            const intern = new Intern("Tim", "345", "tim@email.com", "UTSA");

            expect(intern.email).toBe('tim@email.com');
        });
    });
    describe('getSchool', () => {
        it('should return the school name of new intern', () => {
            const intern = new Intern("Tim", "345", "tim@email.com", "UTSA");

            expect(intern.school).toBe('UTSA');
        });
    });
    describe('getRole', () => {
        it('should return role of new intern', () => {
            const role = "Intern";

            expect(role).toBe('Intern');
        });
    });
});