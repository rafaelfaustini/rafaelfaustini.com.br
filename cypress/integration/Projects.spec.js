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
        cy.get('[data-cy=project]').should('have.length', 3);
    });

    it('search by year', () => {
        cy.get('[data-cy=projects-search]').type('2019');
        cy.get('[data-cy=project]').its('length').should('eq', 2);
        cy.get('[data-cy=project-year]').contains('2019');
    });
    it('search by exact title', () => {
        cy.get('[data-cy=projects-search]').type('Project 2');
        cy.get('[data-cy=project]').its('length').should('eq', 1);
        cy.get('[data-cy=project-title]').contains('Project 2');
    });

    it('search by title and check image', () => {
        cy.get('[data-cy=projects-search]').type('Project 1');
        cy.get('[data-cy=project]').its('length').should('eq', 1);
        cy.get('[data-cy=project-img]').should('have.attr', 'src', 'https://picsum.photos/500');
    });
});
