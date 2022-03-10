// /// <reference types="cypress" />

describe('view profile', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })
})