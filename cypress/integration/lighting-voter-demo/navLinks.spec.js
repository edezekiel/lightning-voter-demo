/// <reference types="cypress" />

describe('routing links', () => {
    beforeEach(() => {
        cy.waitForAuth(Cypress.env('username'), Cypress.env('password'))
        cy.visit('/');
    })

    it('should receive a successful 200 resp when requesting each link', () => {

        cy.get('[class="nav navbar-nav"]').find('a').each( link => {
            cy.request(link.prop('href')).then( response => {
                console.log(response)
                expect(response.status).to.equal(200)
            })
        })
    })

    xit('should navigate to appropriate URL after clicking links', () => {
        const pages = ['Home', 'Create Session', 'Profile', 'Create User', 'Results', 'Users']

        pages.forEach( page => {
            cy.get('[class="nav navbar-nav"]').contains(page).click()
            page = page.toLowerCase().split(' ').join('')
            if (pages.includes('createuser', 'results')) {
                cy.url().should('include', `http://localhost:8801/#/admin/${page}`)
            } else {
                cy.url().should('include', `http://localhost:8801/#/${page}`)
            }
        })
    })

    it('should show home page when user clicks Home nav link', () => {
      cy.get('[class="nav navbar-nav"]').find('a').contains('Home').click()
      cy.get('h2').should('contain', 'Unreviewed Sessions')
    });

    it('should show profile page when user clicks Profile nav link', () => {
      cy.get('[class="nav navbar-nav"]').find('a').contains('Profile').click()
      cy.get('#firstName').should('have.value', 'Joe')
      cy.get('#lastName').should('have.value', 'Eames')
    });

    it('should show results page when user clicks Results nav link', () => {
      cy.get('[class="nav navbar-nav"]').find('a').contains(/^Results$/).click()
        cy.get('h1').should('contain', 'Results')
    });

    it('should show users page when user clicks Users nav link', () => {
        const userRegex = /^Users$/;
        cy.get('[class="nav navbar-nav"]').find('a').contains(userRegex).click()
        cy.get('h1').should('contain', 'User List')
    });
})