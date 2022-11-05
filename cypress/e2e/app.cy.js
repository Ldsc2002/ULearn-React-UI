describe('App loads', () => {
  it('Loads successfully', () => {
    cy.visit('http://localhost:3000/ULearn-React-UI/#/')
  })
})

describe('Login', () => {
    afterEach(() => {
        cy.wait(1000) 
    })

    it('Sets email', () => {
        let email = 'Luis@uvg.edu.gt'
        cy.get('input[type="email"]')
        .invoke('attr', 'value', email)
        .trigger('change')
        .should('have.attr', 'value', email)
    })

    it('Sets password', () => {
        let password = 'Luis123'
        cy.get('input[type="password"]')
        .invoke('attr', 'value', password)
        .trigger('change')
        .should('have.attr', 'value', password)
    })

    it('Clicks login', () => {
        cy.get('button')
        .contains('Iniciar sesión')
        .click()
    })

    it('Navigates after login', () => {
        cy.url().should('include', '/start')
    })

})

describe('Navigates', () => {
    afterEach(() => {
        cy.wait(1000) 
    })

    it('Navigates to biblioteca', () => {
        cy.get('div')
        .contains('Biblioteca')
        .parent()
        .parent()
        .parent()
        .click()
    })

    it('Navigates to pizarrón', () => {
        cy.get('div')
        .contains('Pizarrón')
        .parent()
        .parent()
        .parent()
        .click()
    })

    it('Navigates to calendario', () => {
        cy.get('div')
        .contains('Calendario')
        .parent()
        .parent()
        .parent()
        .click()
    })

    it('Navigates to user profile', () => {
        cy.get('div')
        .contains('Usuario')
        .parent()
        .parent()
        .parent()
        .click()
    })
})

describe('Sign out', () => {
    afterEach(() => {
        cy.wait(1000) 
    })
    
    it('Clicks sign out', () => {
        cy.get('button')
        .contains('Cerrar Sesión')
        .click()
    })

    it('Signs out', () => {
        cy.url().should('include', '/logIn')
    })
})