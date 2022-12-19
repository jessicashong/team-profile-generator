const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return name of engineer', () => {
            const engineer = new Engineer();
            const person = 'Iris';
    
            engineer.getName(person);
    
            expect(engineer.name).toBe('Iris');
        })
    })
    describe('getId', () => {
        it('should return id of new engineer', () => {
            const engineer = new Engineer();
            const id = '456';

            engineer.getId(id);
            
            expect(engineer.id).toBe('456');
        })
    })
    describe('getEmail', () => {
        it('should return email of new engineer', () => {
            const engineer = new Engineer();
            const email = 'iris@email.com';

            engineer.getEmail(email);

            expect(engineer.email).toBe('iris@email.com');
        })
    })
    describe('getRole', () => {
        it('should return role of new engineer', () => {
            const engineer = new Engineer();
            const role = 'Engineer';

            engineer.getRole(role);

            expect(engineer.role).toBe('Engineer');
        })
    })
    describe('getGithub', () => {
        it('should return github username of new engineer', () => {
            const engineer = new Engineer();
            const github = 'jessicashong';

            engineer.getGithub(github);

            expect(engineer.github).toBe('jessicashong');
        })
    })
})