// /// <reference types="cypress" />

describe('view profile', () => {
  beforeEach(() => {
    cy.login('joe@joe.com', 'pass')
    cy.visit('/profile');
  })

  it('should display a user profile', () => {
    cy.get('#firstName').should('have.value', 'Joe')
    cy.get('#lastName').should('have.value', 'Eames')
  })
})