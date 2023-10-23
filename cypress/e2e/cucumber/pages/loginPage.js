class LoginPage {
    
    email() {
        return cy.get('input[name="email"]');
    }

    password() {
        return cy.get('input[name="password"]');
    }

    loginButton() {
        return cy.get(':nth-child(3) > .btn');
    }

    verifyuser() {
        return cy.get('h4');
    }

    errorMessage() {
        return cy.get('span > b');
    }

    logoutButton() {
        return cy.get('form[action="logout.php"]')
        .find('input[value="Log out"]') 
    }

    verifyLoginPage(){
            return cy.get('h3');
        }
}
export default LoginPage;