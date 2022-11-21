
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

describe('Add Event', () => {
    it('Press in-this-month today Button', () => {
        cy.get('[class=in-this-month today]')
        .first()
        .click()

    })

    it('Write fechaInador1', () => {
        let titulo = 'pruebatitulo'
        cy.get('input[class="fechaInador1"]')
        .invoke('attr', 'value', titulo)
        .trigger('change')
        .should('have.attr', 'value', titulo)
    })


    it('Write fechaInador3', () => {
        let contenido = 'pruebacontenido'
        cy.get('input[class="fechaInador3"]')
        .invoke('attr', 'value', contenido)
        .trigger('change')
        .should('have.attr', 'value', contenido)
    })

    it('Press continuaBotoncito Button', () => {
        cy.get('[class=continuaBotoncito]')
        .first()
        .click()

    })

})


describe('Delete Event', () => {
    it('Press in-this-month today Button', () => {
        cy.get('[class=in-this-month today]')
        .first()
        .click()

    })

    it('Press buttonControlBorrar Button', () => {
        cy.contains('TítuloPrueba')
        .parent()
        .siblings('.close')
        
    })


})