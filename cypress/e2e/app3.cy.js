
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
        let email = 'diego@uvg.edu.gt'
        cy.get('input[type="email"]')
        .invoke('attr', 'value', email)
        .trigger('change')
        .should('have.attr', 'value', email)
    })

    it('Sets password', () => {
        let password = 'perdomo'
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

describe('Add Note', () => {
    it('Press add Button', () => {
        cy.get('[class=add]')
        .click()

    })

    it('Write Title', () => {
        let title = 'Prueba'
        cy.get('div')
        .contains('Título')
        .type(title)
        .invoke('attr', 'value', title)
        .trigger('change')
        .should('have.attr', 'value', title)
    })

    it('Write Content', () => {
        let content = 'Esta es una prueba'
        cy.contains('Comparte tus pensamientos...')
        .invoke('attr', 'value', content)
        .trigger('change')
        .should('have.attr', 'value', content)
        
    })

})


describe('Delete Note', () => {
    it('Press x Button', () => {
        cy.get('[class=close]')
        .first()
        .click()

    })


})