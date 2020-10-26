
/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  

describe('Cypress Test for Create Screen', function(){
    it('Verify input types &Buttons',function()  {
      cy.visit('https://hunt2020.herokuapp.com/createScreen')
     cy.url().should('include','Screen')
     if(cy.get('#button1').click()){
         // cy.get('#button1').click();
     cy.visit('https://hunt2020.herokuapp.com/createTeam')
     cy.go('forward')
     cy.go('back')
     }
      if(cy.get('button[id="button2"]').click())
       {
       
     cy.visit('https://hunt2020.herokuapp.com/quest')
     cy.go('forward')
     cy.go('back')
     }

     
    })
})
  