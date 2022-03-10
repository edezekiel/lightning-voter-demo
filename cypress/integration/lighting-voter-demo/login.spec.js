/// <reference types="cypress" />

beforeEach('authentication', () => {
    cy.visit('/login');
    cy.login(Cypress.env('username'), Cypress.env('password'))
})

it('should log us in and redirect to landing (home) page', () => {
    cy.url().should('contain', '/home');
})