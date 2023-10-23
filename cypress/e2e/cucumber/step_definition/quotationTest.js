/// <reference types="cypress" />

const faker = require("faker");
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import QuotationPage from "../pages/quotationPage";

const quotationPage = new QuotationPage();

let idNumber;

Given("the user is logged in", () => {
    cy.visit('/insurance/v1/index.php');
    cy.fixture('loginAndLogoutData').as('userLoginData');
    cy.get('@userLoginData').then((userLoginData) => {
        const validUser = userLoginData.validUser;
        cy.login(validUser.email, validUser.password);
    });
});

When("the user navigates to the Quotation Request page", () => {
    quotationPage.quotationRequestPage().click(); 
});

And("provides valid quotation request details", () => {
    quotationPage.quotationIncidents().type(faker.random.number({min:0, max:5}));
});

And("submits the request", () => {
    quotationPage.saveQuotation().click();
});

Then("the user should see a confirmation message", () => {

    const regex = /\d+/; 
    cy.get('body').then(($body) => {
        idNumber = $body.text().match(regex);
         cy.log(idNumber);
         cy.wrap(idNumber).should('not.be.null');
    })
});


When("the user navigates to the Quotation Retrieve page", () => {
    quotationPage.quotationRetrievePage().click();   
});

And("provides valid quotation retrieval details", () => {
    quotationPage.enterIdentificationNumber().type(idNumber.toString());
    quotationPage.retrieveQuote().click();
});

Then("the user should see the requested quotation", () => {
    quotationPage.validateQuoteRetrieve().should('be.visible');
});
