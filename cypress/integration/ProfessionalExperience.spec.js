describe('professional experience available for users', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/website_en.json', { fixture: 'mock-professional-experience.json' });
        cy.intercept('GET', '**/website_pt-br.json', { fixture: 'mock-professional-experience.json' });
        cy.visit('index.html');
    });

    it('current experience should be shown', () => {
        let currentExperience = cy.get('.experiencia .funcoes-atuais .card');
        currentExperience.its('length').should('eq', 2);
        currentExperience.get('h2').contains('Current Work').should('be.visible');
        cy.get('.experiencia .funcoes-atuais > :nth-child(1) p').its('length').should('eq', 3);
    });
    it('past experience should be shown', () => {
        let currentExperience = cy.get('.experiencia .experiencia-anterior .card');
        currentExperience.its('length').should('eq', 5);
        currentExperience.get('h2').contains('Current Work').should('be.visible');
        cy.get('.experiencia .experiencia-anterior > :nth-child(1) p').its('length').should('eq', 2);
    });
    it('resume button should be valid', () => {
        cy.get('.experiencia .experiencia-botoes .btn');
        cy.get('.experiencia .experiencia-botoes .btn').its('length').should('eq', 1);
        cy.get('.experiencia .experiencia-botoes .btn').contains('Resume').should('be.visible');
        cy.get('.experiencia .experiencia-botoes .btn').should('have.attr', 'href');
    });
});
