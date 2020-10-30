/**
 * @sample_create_competition - cypress test
 *
 *
 * @author Sumana Reddy
 */

/// <reference types="Cypress"/>

 describe('My First Test for Competition page', function(){
    it('Verify input types &Buttons',function()  {
      cy.visit('https://hunt2020.herokuapp.com/create_competition')
      cy.url().should('include','competition')
      cy.get('input[class="no-outline"]').should('be.visible').should('be.enabled').type('Enter Competition')
      cy.get('#date').type('2020-10-21')
      cy.get('#time').type("08:20")
      cy.get('input[placeholder = "End Date"]').type('2020-10-21')
      cy.get('input[placeholder = "End Time"]').type("08:20")     
      cy.get('button[data-toggle=dropdown]').should('be.visible').click()

     
    })
})
