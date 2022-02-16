/// <reference types="cypress" />

describe('lightning-voter-demo app home', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.login('joe@joe.com', 'pass')
    })
    
    it('should have the correct page title', () => {
        cy.visit('http://localhost:8801/#/home')
        cy.get('h2').should('contain', 'Unreviewed Sessions')
    })
  })
  