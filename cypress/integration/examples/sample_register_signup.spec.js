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
    
    it('Register!',function() {
      cy.visit('https://hunt2020.herokuapp.com/Register') // Opens URL
    
      cy.get('#email').type('csrisudheera96@gmail.com') // Gives Email 

      cy.get('#password').type('qwert@123') // Gives New password

      cy.get('#newpassword').type('qwert@123') // Gives Conform password

    cy.get('.rounded-100.text-center').click() // Clicks on register

    cy.wait(3000) // waits for going to other page after clicking register

    cy.visit('https://hunt2020.herokuapp.com/Register') // Opens URL
    cy.wait(3000) // Waits for visiting login page


    cy.get('#Login').click() // Clicks on login

    cy.wait(3000) // Waits for visiting login page

      
    
    })
 
 
 
