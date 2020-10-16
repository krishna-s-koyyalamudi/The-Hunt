Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('forgot password page',function(){
  it('Cypress - forgot password page', function () {
    cy.visit('https://hunt2020.herokuapp.com/forgotemail')
    cy.get('.text-center')
  cy.get('[type="text"]').type('s538295@nwmissouri.edu')
  cy.get('[type="submit"]').click()
  cy.visit('https://hunt2020.herokuapp.com/forgotcod')
    })
  })

  
        