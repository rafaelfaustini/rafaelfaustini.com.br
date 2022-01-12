describe('professional experience available for users', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/website_en.json', { fixture: 'mock-professional-experience.json' });
        cy.intercept('GET', '**/website_pt-br.json', { fixture: 'mock-professional-experience.json' });
        cy.visit('index.html');
    });

    it('current experience should be shown', () => {
        cy.get('[data-cy=current-work]').its('length').should('eq', 2);
        cy.get('[data-cy=current-work-title]').contains('Current Work').should('be.visible');
        cy.get('[data-cy=current-works] > :nth-child(1) [data-cy=current-work-topic]').its('length').should('eq', 3);
    });
    it('past experience should be shown', () => {
        cy.get('[data-cy=past-work]').its('length').should('eq', 5);
        cy.get('[data-cy=past-work-title]').contains('Past Experience').should('be.visible');
        cy.get('[data-cy=past-works] > :nth-child(1) [data-cy=past-work-topic]').its('length').should('eq', 2);
    });
    it('resume button should be valid', () => {
        cy.get('[data-cy=resume-button]').its('length').should('eq', 1);
        cy.get('[data-cy=resume-button]').contains('Resume').should('be.visible');
        cy.get('[data-cy=resume-button]').should('have.attr', 'href');
    });
});
