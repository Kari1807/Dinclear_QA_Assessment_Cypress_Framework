class QuotationPage {

    quotationRequestPage(){
        return cy.get('#ui-id-2');
    }

    quotationIncidents(){
        return cy.get('#quotation_incidents')
    }

    saveQuotation(){
        return cy.get('#new_quotation > .actions > .btn-success')
    }

    quotationRetrievePage(){
        return cy.get('#ui-id-3');
    }

    enterIdentificationNumber(){
        return cy.get('form > [type="text"]');
    }

    retrieveQuote(){
        return cy.get('#getquote');
    }
    
    validateQuoteRetrieve(){
        return cy.get('table > tbody > tr > :nth-child(1)');
    }
}
export default QuotationPage;