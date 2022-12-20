const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return name of engineer', () => {
            const engineer = new Engineer("Iris", "456", "iris@email.com", "jessicashong");
    
            expect(engineer.name).toBe('Iris');
        });
    });
    describe('getId', () => {
        it('should return id of new engineer', () => {
            const engineer = new Engineer("Iris", "456", "iris@email.com", "jessicashong");
            
            expect(engineer.id).toBe('456');
        });
    });
    describe('getEmail', () => {
        it('should return email of new engineer', () => {
            const engineer = new Engineer("Iris", "456", "iris@email.com", "jessicashong");

            expect(engineer.email).toBe('iris@email.com');
        });
    });
    describe('getGithub', () => {
        it('should return github username of new engineer', () => {
            const engineer = new Engineer("Iris", "456", "iris@email.com", "jessicashong");

            expect(engineer.github).toBe('jessicashong');
        });
    });
    describe('getRole', () => {
        it('should return role of new engineer', () => {
            const role = "Engineer";

            expect(role).toBe('Engineer');
        });
    });
});