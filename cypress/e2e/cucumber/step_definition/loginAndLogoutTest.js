/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

Given("the user is on the Login page", () => {
    cy.visit('/insurance/v1/index.php')
});

When("the user enters valid login credentials", () => {
    //load data from fixtures
    cy.fixture('loginAndLogoutData').as('userLoginData');
    cy.get('@userLoginData').then((userLoginData) => {
        //get valid user data
        const validUser = userLoginData.validUser;
        loginPage.email().type(validUser.email);
        loginPage.password().type(validUser.password);
    });
});

And("clicks the Login button", () => {
    loginPage.loginButton().click();
});

Then("the user should be successfully logged in", () => {
    //load data from fixtures
    cy.fixture('loginAndLogoutData').as('userLoginData');
    cy.get('@userLoginData').then((userLoginData) => {
        //get valid user data
        const validUser = userLoginData.validUser;
        loginPage.verifyuser().should('be.visible');
        loginPage.verifyuser().should('have.text', validUser.email);
    }); 

});

When("the user enters invalid login credentials", () => {
    //load data from fixtures
    cy.fixture('loginAndLogoutData').as('userLoginData');
    //get invalid user data
    cy.get('@userLoginData').then((userLoginData) => {
        const invalidUser = userLoginData.invalidUser;
        loginPage.email().type(invalidUser.email);
        loginPage.password().type(invalidUser.password);
    });
});

Then("the user should see an error message", () => {
  loginPage.errorMessage().should('have.text','Enter your Email address and password correct');
});

Given("the user is logged in", () => {
    //load data from fixtures
    cy.fixture('loginAndLogoutData').as('userLoginData');
    cy.get('@userLoginData').then((userLoginData) => {
        const validUser = userLoginData.validUser;
        cy.login(validUser.email, validUser.password);
    });
});

When("the user clicks the Logout button", () => {
    loginPage.logoutButton().click();
});

Then("the user should be successfully logged out", () => {
    loginPage.verifyLoginPage().should('have.text','Login');
});
