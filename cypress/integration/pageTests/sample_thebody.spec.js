/*
* @author: Sri Sudheera Chitipolu
*
*/

/// <reference types="cypress"/>
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  

describe('Cypress Test for the body', function(){
    it('Verify input types &Buttons',function()  {
      cy.visit('https://hunt2020.herokuapp.com/Home') // Opens URL
      
      cy.get('body > header > div > label').contains('Logout').click() // Clicks on logout

      cy.visit('https://hunt2020.herokuapp.com/Home') // Opens URL

      cy.get('.fas.fa-home').click() // Cicks on home page
      cy.wait(2000)


      cy.get('.fas.fa-bullseye').click() // clicks on create team page
      cy.wait(2000)

      cy.get('.fas.fa-plus-circle').click() // clicks on create competition page
      cy.wait(2000)
      cy.get('.fas.fa-user-circle').click() // clicks on user profile page
      cy.wait(2000)


    
 
    
 

     
    })
})