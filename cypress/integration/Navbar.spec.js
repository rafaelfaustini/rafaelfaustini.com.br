/// <reference types="cypress" />

describe('website built', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/website_en.json', { fixture: 'mock-navbar.json' });
        cy.intercept('GET', '**/website_pt-br.json', { fixture: 'mock-navbar.json' });
        cy.visit('index.html');
    });

    it('navbar built', () => {
        cy.get('.menu-logo a').contains('brand');
        cy.get('.menu li').should('have.length', 5);
        cy.get('.menu li').last().find('img').should('have.attr', 'src', 'https://via.placeholder.com/150');
    });
});
