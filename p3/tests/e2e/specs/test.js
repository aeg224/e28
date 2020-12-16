// https://docs.cypress.io/api/introduction/api.html

let EMAIL = 'test@' + Math.floor(Math.random() * 1000);

describe('Auth Test - Logged Out', () => {
  it('Tests Logged Out Users Only Have Main Page access', () => {
    cy.visit('/');
    cy.contains('h5', 'Abraham Lincoln Birthplace');
    cy.get('#19').click();
    cy.contains('h5', 'Tonto');
    cy.visit('/parks/tont');
    cy.contains('h1', '401: UnAuthorized Page - Access Denied');
    cy.visit('/contact');
    cy.contains('h1', '401: UnAuthorized Page - Access Denied');
  })
})


describe('Vuex Test', () => {
  it('remember page when going back', () => {
    cy.visit('/');
    cy.get('#19').click();
    cy.visit('/parks/tont');
    cy.visit('/');
    cy.contains('h5', 'Tonto');
  })
})

describe('Form Validation - Signup ', () => {
  it('Tests the form validation for signup', () => {
    cy.visit('/login');
    cy.contains('h3', 'Please Sign Up');
    cy.get('#submitReg').click();
    cy.contains('#errorMessage1', 'Username must be over 2 chars long');
    cy.contains('#errorMessage2', 'The email must be over two chars and contain an @');
    cy.contains('#errorMessage3', 'Password must be over four chars long');
  })
})   

describe('Registration Test', () => {
  it('Tests the Registration Functionality', () => {
    cy.get('#name').type('Test');
    cy.get('#email').type(EMAIL);
    cy.get('#password').type('password');
    cy.get('#submitReg').click();
    cy.contains('h3', 'Please Log In')
    
  })
})

describe('Form Validation - Login', () => {
  it('Tests the Login Validation', () => {
    cy.get('#submitLogin').click();
    cy.contains('#errorMessage1', 'The email must be over two chars and contain an @');
    cy.contains('#errorMessage2', 'Password must be over four chars long');
  })
})

describe('Login Test', () => {
  it('Tests the Login Functionality', () => {
    cy.get('#email').type('a@a');
    cy.get('#password').type('asdfasdf');
    cy.get('#submitLogin').click();

  })
})


describe('Auth Test - Logged In', () => {
  it('Logged In Users Can Access Pages and leave a comments', () => {
    cy.get('#19').click();
    cy.contains('h5', 'Tonto');
    cy.visit('/parks/tont');
    cy.contains('h2', 'Tonto National Monument');


    // uses the unique email to leave a comment
    cy.get('#name').type(EMAIL);
    cy.get('#comment').type('Great Park!!!');
    cy.get('#submitComment').click();

    // confirms the comment was created correctly
    cy.contains('#commentName', EMAIL)
    cy.visit('/contact');
    cy.contains('h3', 'Send Us A Message With The Form Below');
  })
})

describe('Log Out Functionality', () => {
  it('Log In, confirm pages are working, log out confirm they are not working except for home page', () => {
    cy.visit('/login');
    cy.get('#loginToggle').click();
    cy.get('#email').type('a@a');
    cy.get('#password').type('asdfasdf');
    cy.get('#submitLogin').click();
    cy.get('#19').click();
    cy.contains('h5', 'Tonto');
    cy.visit('/parks/tont');
    cy.contains('h2', 'Tonto National Monument');
    cy.get('#logoutButton').click();
    cy.visit('/parks/tont');
    cy.contains('h1', '401: UnAuthorized Page - Access Denied');
    cy.visit('/contact');
    cy.contains('h1', '401: UnAuthorized Page - Access Denied');
    cy.visit('/');
    cy.get('#1').click();
    cy.contains('h5', 'Abraham Lincoln Birthplace');

  })
})

