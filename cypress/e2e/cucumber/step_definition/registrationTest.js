/// <reference types="cypress" />

const faker = require("faker");
import {And, Given} from "cypress-cucumber-preprocessor/steps"
import RegistrationPage from "../pages/registrationPage"
import LoginPage from "../pages/loginPage"

    const registrationPage = new RegistrationPage();
    const loginPage = new LoginPage();
    const firstName = faker.name.firstName();
    const surname = faker.name.lastName();
    const phone = faker.phone.phoneNumber();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const county = faker.address.county();
    const zipcode = faker.address.zipCode();
    const dob_month = faker.date.past().getMonth();
    const dob_day = faker.date.past().getDate();

Given("the user is on the Registration page", () => {
    cy.visit('/insurance/v1/index.php')
    registrationPage.registrationButton().click();
});

When("the user provides valid registration information", () => {
    cy.fixture('userData').as('userRegData');
    cy.get('@userRegData').then((userData) => {
        registrationPage.selectTitle().select(userData.title);
        registrationPage.firstName().type(firstName);
        registrationPage.surname().type(surname);
        registrationPage.phone().type(phone);
        registrationPage.selectYear().select(userData.dob_year);
        registrationPage.selectMonth().select(dob_month);
        registrationPage.selectDay().select(dob_day);
        registrationPage.selectLicenceType(userData.licenceType);
        registrationPage.selectLicencePeriod().select(userData.licencePeriod);
        registrationPage.selectOccupation().select(userData.occupation);
        registrationPage.streetAddress().type(address);
        registrationPage.city().type(city);
        registrationPage.county().type(county);
        registrationPage.postcode().type(zipcode);
        registrationPage.email().type(email);
        registrationPage.password().type(password);
        registrationPage.confirmPassword().type(password);
    });
});

And("clicks the Register button", () => {
    registrationPage.createButton().click();
});

Then("the user should be successfully registered", () => {
    loginPage.verifyLoginPage().should('be.visible');
    loginPage.verifyLoginPage().should('have.text', 'Login');
    cy.login(email, password);
    loginPage.verifyuser().should('be.visible');
});



