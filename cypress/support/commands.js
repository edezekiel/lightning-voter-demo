// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.intercept('POST', 'http://localhost:8801/api/login', {
    success: true,
    user: {
      id: 1,
      email: 'joe@joe.com',
      password: 'pass',
      firstName: 'Joe',
      lastName: 'Eames',
      isAdmin: true,
    },
  }).as('getCurrentIdentity');

  cy.visit('/login');
  cy.get('input').type(email);
  cy.get('.btn').click();
  cy.url().should('contain', '/home');
});

Cypress.Commands.add('createSession', (title, length, description) => {
  cy.visit('/createsession');
  cy.get('form > div > input[type="text"]').type(title);
  cy.get('form > div > input[type="number"]').type(length);
  cy.get('form > div > textarea').type(description);
  cy.get('.btn').click();
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
