describe('App loads', () => {
  it('Loads successfully', () => {
    cy.visit('http://localhost:3000/ULearn-React-UI/#/')
  })
})
 
describe('Signup', () => {
    afterEach(() => {
        cy.wait(1000) 
    })

    it('Clicks signup', () => {
        cy.get('button')
        .contains('Crear cuenta')
        .click()
    })

    it('Sets name', () => {
        let nombre = 'Stefano Aragoni'
        cy.get('input[type="text"]')
        .invoke('attr', 'value', nombre)
        .trigger('change')
        .should('have.attr', 'value', nombre)
    })

    it('Sets college', () => {
        let uni = 'Universidad del Valle de Guatemala'
        cy.get('select#uni').select(uni).should('have.value', 'uvg')
    })

    it('Sets major', () => {
        let carrera = 'Ingeniería Civil'
        cy.get('select#carrera').select(carrera).should('have.value', carrera)
    })

    it('Sets email', () => {
        let email = 'stefano1101@uvg.edu.gt'
        cy.get('input[type="email"]')
        .invoke('attr', 'value', email)
        .trigger('change')
        .should('have.attr', 'value', email)
    })

    it('Sets password', () => {
        let password = 'Stefano12345'
        cy.get('input[type="password"]')
        .invoke('attr', 'value', password)
        .trigger('change')
        .should('have.attr', 'value', password)
    })

    it('Clicks sign up', () => {
        cy.get('button')
        .contains('Crear cuenta')
        .click()
    })

    it('Navigates after sign up', () => {
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