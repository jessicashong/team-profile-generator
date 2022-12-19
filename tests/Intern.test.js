const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        it('should return name of intern', () => {
            const intern = new Intern();
            const person = 'Tim';
    
            intern.getName(person);
    
            expect(intern.name).toBe('Tim');
        })
    })
    describe('getId', () => {
        it('should return id of new intern', () => {
            const intern = new Intern();
            const id = '345';

            intern.getId(id);
            
            expect(intern.id).toBe('345');
        })
    })
    describe('getEmail', () => {
        it('should return email of new intern', () => {
            const intern = new Intern();
            const email = 'tim@email.com';

            intern.getEmail(email);

            expect(intern.email).toBe('tim@email.com');
        })
    })
    describe('getRole', () => {
        it('should return role of new intern', () => {
            const intern = new Intern();
            const role = 'Intern';

            intern.getRole(role);

            expect(intern.role).toBe('Intern');
        })
    })
    describe('getSchool', () => {
        it('should return the school name of new intern', () => {
            const intern = new Intern();
            const school = 'UTSA';

            intern.getSchool(school);

            expect(intern.school).toBe('UTSA');
        })
    })
})