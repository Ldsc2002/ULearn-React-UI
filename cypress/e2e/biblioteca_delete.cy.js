
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

    it('Navigates to biblioteca', () => {
        cy.get('div')
        .contains('Biblioteca')
        .parent()
        .parent()
        .parent()
        .click()
    })

})

describe('Delete book', () => {
    it('Open book', () => {
        cy.get('[class=book-item]')
        .within(() => {
            cy.get('[class=title_book]')
            .contains('Cypress...')
            .parent()
            .click()
        })
    })

    it('Delete book', () => {
        cy.get('[class=delete_btn]')
        .click()
        
    })


})