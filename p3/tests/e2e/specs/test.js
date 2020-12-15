// https://docs.cypress.io/api/introduction/api.html

describe('Login Test', () => {
  it('Visits the login page', () => {
    let EMAIL='test@'+Math.floor(Math.random() * 1000);
    cy.visit('/')
    cy.contains('h5', 'Abraham Lincoln Birthplace')
    cy.get('#10').click();
    cy.contains('h5', 'Harriet Tubman')
    cy.visit('/parks/hart')
    cy.contains('h1', '401: UnAuthorized Page - Access Denied')
    cy.visit('/')
    cy.contains('h5', 'Harriet Tubman')

    
    

    cy.visit('/login')
    cy.contains('h3', 'Please Sign Up')
    cy.get('#submitReg').click();
    cy.contains('#errorMessage1', 'The name field is required.')
    cy.contains('#errorMessage2', 'The email field is required.')
    cy.contains('#errorMessage3', 'The password field is required.')
    cy.get('#name').type('Test')
    cy.get('#email').type(EMAIL)
    cy.get('#password').type('password')
    cy.get('#loginToggle').click();
    cy.get('#submitLogin').click();
    cy.contains('#errorMessage1', 'The email field is required.')
    cy.contains('#errorMessage2', 'The password field is required.')
    cy.get('#email').type('a@a')
    cy.get('#password').type('asdfasdf')
    cy.get('#submitLogin').click();

  })
})

