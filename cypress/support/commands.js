// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import LoginPage from "../e2e/cucumber/pages/loginPage";

const loginPage = new LoginPage();
Cypress.Commands.add("login", (email, password) => {
    cy.visit('/insurance/v1/index.php')
    //login to the application with valid credentials
    loginPage.email().type(email);
    loginPage.password().type(password);
    loginPage.loginButton().click();
  });
  
