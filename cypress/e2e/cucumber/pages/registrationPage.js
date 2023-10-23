class RegistrationPage {

    registrationButton(){
        return cy.get('a[href*="register"]');
    }

    selectTitle(){
        return cy.get('#user_title');
    }

    firstName(){
        return cy.get('#user_firstname');
    }

    surname(){
        return cy.get('#user_surname');
    }

    phone(){
        return cy.get('#user_phone');
    }

    selectYear(){
        return cy.get('#user_dateofbirth_1i');
    }

    selectMonth(){
        return cy.get('#user_dateofbirth_2i');
    }

    selectDay(){
        return cy.get('#user_dateofbirth_3i');
    } 
    
    selectLicenceType(licenceType) {
        const normalizedLicenceType = licenceType.toLowerCase();
      
        if (normalizedLicenceType === 'full') {
          return cy.get('#licencetype_t');
        } else if (normalizedLicenceType === 'provisional') {
          return cy.get('#licencetype_f');
        } else {
          // Default case or handle other values as needed
          return cy.get('#licencetype_t');
        }
    }
    
    selectLicencePeriod(){
        return cy.get('#user_licenceperiod');
    }

    selectOccupation(){
        return cy.get('#user_occupation_id');
    }

    streetAddress(){
        return cy.get('#user_address_attributes_street');
    }

    city(){
        return cy.get('#user_address_attributes_city');
    }

    county(){
        return cy.get('#user_address_attributes_county');
    }

    postcode(){
        return cy.get('#user_address_attributes_postcode');
    }

    email(){
        return cy.get('#user_user_detail_attributes_email');
    }

    password(){
        return cy.get('#user_user_detail_attributes_password');
    }

    confirmPassword(){
        return cy.get('#user_user_detail_attributes_password_confirmation');
    }

    createButton(){
        return cy.get('[name="submit"]');
    }
}
export default RegistrationPage;