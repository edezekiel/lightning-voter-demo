/// <reference types="cypress" />

describe('lightning-voter-demo app create session', () => {
  beforeEach(() => {
    cy.waitForAuth(Cypress.env('username'), Cypress.env('password'));
    cy.visit('/createsession');
  });

  it('should create a session and contain the appropriate title', () => {
    cy.createSession(
      "Tyler's old session",
      30,
      'come see me make an ass of myself at Cypress'
    );
    cy.get('.panel-heading').should('contain', "Tyler's old session");
  });
});
