/// <reference types="cypress" />

describe('website built', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('navbar built', () => {
        cy.get('.menu-logo a').contains('Rafael Faustini');
        cy.get('.menu li').should('have.length', 5);
        cy.get('.menu li').last().find('img').should('have.attr', 'src');
    });
});
