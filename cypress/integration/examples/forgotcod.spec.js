Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('forgot reset code page',function(){
    it('Cypress - forgot reset code page', function () {
      cy.visit('https://hunt2020.herokuapp.com/forgotcod')
      cy.get('.text-center')
    cy.get('[type="text"]').type('*********')
    cy.get('[type="submit"]').click()
    
      })
    })
  