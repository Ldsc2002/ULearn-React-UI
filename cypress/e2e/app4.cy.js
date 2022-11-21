
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
    
    it('Navigates to calendario', () => {
        cy.get('div')
        .contains('Calendario')
        .parent()
        .parent()
        .parent()
        .click()
    })

})

describe('Add Event', () => {
    it('Press in-this-month today Button', () => {
        cy.get('table').within(() => {
            cy.get('td[class="in-this-month today"]')
            .click()
          })

    })

    it('Write fechaInador1', () => {
        let titulo = 'pruebatitulo'
        cy.get('input[name="titulo"]')
        .invoke('attr', 'value', titulo)
        .trigger('change')
        .should('have.attr', 'value', titulo)
    })


    it('Write fechaInador3', () => {
        let contenido = 'pruebacontenido'
        cy.get('input[name="contenido"]')
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
    it('Press in-this-month todayEvent Button', () => {
        cy.get('table').within(() => {
            cy.get('td[class="in-this-month todayEvent"]')
            .click()
          })

    })

    it('Press buttonControlBorrar Button', () => {
        cy.wait(10000)
        cy.get('[class=buttonControlBorrar]')
        .first()
        .click()

    })


})