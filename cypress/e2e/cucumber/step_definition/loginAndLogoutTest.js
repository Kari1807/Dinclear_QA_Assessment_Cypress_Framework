/// <reference types="cypress" />
const faker = require("faker");
import {Given} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../pages/loginPage"

const loginPage = new LoginPage();
cy.fixture('loginAndLogoutData').as('userLoginData');

Given("the user is on the Login page", () => {
    cy.visit('/insurance/v1/index.php')
});

When("the user enters valid login credentials", () => {
    cy.get('@userLoginData').then((userLoginData) => {
        loginPage.email().type(userLoginData.email);
        loginPage.password().type(userLoginData.password);
    });
});

And("clicks the Login button", () => {
    loginPage.loginButton().click();
});

Then("the user should be successfully logged in", () => {
    cy.get('@userLoginData').then((userLoginData) => {
        loginPage.verifyuser().should('contain', userLoginData.username);
    }); 

});

