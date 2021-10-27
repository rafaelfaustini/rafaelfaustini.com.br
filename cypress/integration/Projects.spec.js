/// <reference types="cypress" />

describe('should have a list of projects', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('list exists and not empty', () => {
        let projects = cy.get('[id^=projetos_] .pj');
        projects.its('length').should('be.gte', 0);
    });
});
describe('should be able to search for projects', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('search by title', () => {
        cy.get('input').type('Smartcare');
        let projects = cy.get('[id^=projetos_] .pj');
        projects.its('length').should('eq', 1);
        cy.get('.container-projetos .h3').contains('SmartCare');
    });
    it('search by programming language', () => {
        cy.get('input').type('Smartcare');
        let projects = cy.get('[id^=projetos_] .pj');
        projects.its('length').should('be.gte', 1);
        cy.get('.container-projetos .h3').contains('Python');
    });
});
describe('should be able to see other projects', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('button to redirect to github', () => {
        cy.get('#portifolio .vejamais > .btn').should('have.attr', 'href', 'https://github.com/rafaelfaustini');
    });
});
