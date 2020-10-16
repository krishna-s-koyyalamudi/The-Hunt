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
      cy.visit('https://hunt2020.herokuapp.com')
    
 

     
    })
})