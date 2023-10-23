/// <reference types="cypress" />
const faker = require("faker");
import {Given} from "cypress-cucumber-preprocessor/steps"
import RegistrationPage from "../pages/registrationPage"

const registrationPage = new RegistrationPage();

Given("the user is on the Registration page", () => {
    cy.visit('/insurance/v1/index.php')
    registrationPage.registrationButton().click();
  
});

When("the user provides valid registration information", () => {
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

    cy.fixture('userRegistrationData').as('userRegData');

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
    //registrationPage.createButton().click();

    });
});
