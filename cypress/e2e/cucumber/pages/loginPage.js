class LoginPage {
    email() {
        return cy.get('input[name="email"]');
    }

    password() {
        return cy.get('input[name="password"]');
    }

    loginButton() {
        return cy.get('button[name="submit"]');
    }

    verifyuser() {
        return cy.get('h4');
    }

}

export default LoginPage;