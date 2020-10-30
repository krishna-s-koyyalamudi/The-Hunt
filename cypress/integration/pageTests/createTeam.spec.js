Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  describe('Create Team page',function(){
  it('Cypress - Team create page', function () {
      cy.visit('http://127.0.0.1:3000/createScreen')
      cy.get('.container').click()
    cy.visit('http://127.0.0.1:3000/team/createTeam') 
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Enter Team Name')

  cy.get('[type="submit"]').click()
      })
   }); 
