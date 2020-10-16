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
    
    it('Does not do much!',function() {
      cy.visit('https://hunt2020.herokuapp.com/Register') // Opens URL
    
      cy.get('#uname').type('csrisudheera96@gmail.com') // Gives Email 

      cy.get('#password').type('qwert@123') // Gives New password

      cy.get('#newpassword').type('qwert@123') // Gives Conform password

    cy.get('#signup').click() // Clicks on register

    cy.wait(3000) // waits for going to other page after clicking register

    cy.get('#login').click() // Clicks on login

    cy.wait(3000) // Waits for visiting login page

    cy.visit('https://hunt2020.herokuapp.com/Login') // Opens login page URL
      
    
    })
 
 
 
