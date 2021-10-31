/// <reference types="cypress" />

describe('should have a list of projects', () => {
    beforeEach(() => {
        cy.intercept('GET', '**/projetos_en.json', { fixture: 'mock-projects.json' });
        cy.intercept('GET', '**/projetos_pt-br.json', { fixture: 'mock-projects.json' });
        cy.intercept('GET', '**/website_en.json', { fixture: 'mock-projects-website.json' });
        cy.intercept('GET', '**/website_pt-br.json', { fixture: 'mock-projects-website.json' });
        cy.visit('index.html');
    });

    it('list must have correct length', () => {
        cy.get('[id^=projetos_] .pj').should('have.length', 3);
    });

    it('search by year', () => {
        cy.get('input').type('2019');
        cy.get('[id^=projetos_] .pj').its('length').should('eq', 2);
        cy.get('.container-projetos .h3').contains('2019');
    });
    it('search by exact title', () => {
        cy.get('input').type('Project 2');
        cy.get('[id^=projetos_] .pj').its('length').should('eq', 1);
        cy.get('.container-projetos .h3').contains('Project 2');
    });

    it('search by title and check image', () => {
        cy.get('input').type('Project 1');
        cy.get('[id^=projetos_] .pj').its('length').should('eq', 1);
        cy.get('.container-projetos img').should('have.attr', 'src', 'https://picsum.photos/500');
    });
});
