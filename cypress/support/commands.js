
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  cy.fixture('loginResponse.json').then((json) => {
    cy.intercept('POST', 'http://localhost:8801/api/login', json).as('getCurrentIdentity');
    cy.get('input').type(json.user.email);
    cy.get('.btn').click();
  })
});

Cypress.Commands.add('waitForAuth', (email, password) => {
  cy.fixture('users.json').then((json) => {
    cy.intercept('GET', 'http://localhost:8801/api/currentIdentity', json[0]);
  })
})

Cypress.Commands.add('createSession', (title, length, description) => {
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
