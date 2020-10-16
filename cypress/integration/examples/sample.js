describe("Loading the homepage", function() {
    it("successfully loads", function() {
        cy.visit("https://hunt2020.herokuapp.com/Login")
    })
})
describe("adding blog post", function() {
    it("creating a new blog post", function() {
        cy.visit("https://hunt2020.herokuapp.com/Login")
        cy.get("input").type("Cypress added blog post")
        cy.get("textarea").type(
            "Hey it is an automated testing blog post.please check it out the cypress.io...it' so cool"
        )
        cy.get("div.submit").click()
        cy.get("div.item")
            .last()
            .should("contain", "Cypress added blog post")
    })
})