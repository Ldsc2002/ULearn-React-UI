
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

describe('Add Book', () => {
    it('Press add Button', () => {
        cy.get('button')
        .contains('+')
        .click()
    })

    it('Write Title', () => {
        let title = 'Cypress Test'
        /*cy.get('input[type="text"]')
        .invoke('attr', 'value', title)*/
        cy.get('[id="titulo"]')
        .invoke('attr', 'value', title)
        .trigger('change')
        .should('have.attr', 'value', title)
    })

    it('Write description', () => {
        let description = 'Esta es una prueba automatizada por cypress'
        cy.get('[id="descripcion"]')
        .invoke('attr', 'value', description)
        .trigger('change')
        .should('have.attr', 'value', description)
    })

    it('Upload file', () => {
        cy.get('[id="file"]')
        .selectFile('./cypress/e2e/test_file_upload/test.txt')
        
    })

    it('Clicks add', () => {
        cy.on('window:alert', (str) => {
            expect(str).to.equal('File uploaded successfully!')
            cy.get('button')
            .contains('Subir')
            .click()
        })
    })

    //it('Check if book was added', () => {

})

/*describe('Open book', () => {
    it('Press book', () => {
        cy.get('[class=book]')
        .first()
        .click()
    })
})

describe('Delete book', () => {
    it('Press delete button', () => {
        cy.get('[class=delete]')
        .first()
        .click()
    })
})

*/
