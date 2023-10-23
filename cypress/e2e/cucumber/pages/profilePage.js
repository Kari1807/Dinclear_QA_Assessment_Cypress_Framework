class ProfilePage {

    navigateToViewProfilePage(){
        return cy.get('#ui-id-4');
    }

    navigateToEditProfilePage(){
        return cy.get('#ui-id-5');
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

    updateUserDetails(){
        return cy.get('[name="commit"]');
    }

    showFirstName(){
        return cy.get('#showfirstname');
    }

    showSurname(){
        return cy.get('#showsurname');
    }
}
export default ProfilePage;