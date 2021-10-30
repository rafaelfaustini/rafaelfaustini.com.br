/// <reference types="cypress" />

describe('should be in correct environment', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/website_en.json', { fixture: 'mock-navbar.json' });
        cy.intercept('GET', '**/website_pt-br.json', { fixture: 'mock-navbar.json' });
    });

    it('should be in beta', () => {
        cy.intercept('GET', '**/config.json', { fixture: 'beta-config.json' });
        cy.visit('index.html');

        cy.get('.menu-logo .badge').contains('BETA');
    });
    it('should be in dev', () => {
        cy.intercept('GET', '**/config.json', { fixture: 'dev-config.json' });
        cy.visit('index.html');

        cy.get('.menu-logo .badge').contains('DEV');
    });
    it('should be in production', () => {
        cy.intercept('GET', '**/config.json', { fixture: 'prod-config.json' });
        cy.visit('index.html');

        cy.get('.menu-logo .badge').should('not.exist');
    });
});
