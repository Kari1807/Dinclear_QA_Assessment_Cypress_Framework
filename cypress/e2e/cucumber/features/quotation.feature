Feature: Quotation
              As a user, I want to request and retrieve a quotation for a product, so that I can get an idea of the cost of the product.
        
        Scenario: User requests a quotation
            Given the user is logged in
             When the user navigates to the Quotation Request page
              And provides valid quotation request details
              And submits the request
             Then the user should see a confirmation message

        Scenario: User retrieves a quotation
            Given the user is logged in
             When the user navigates to the Quotation Retrieve page
              And provides valid quotation retrieval details
             Then the user should see the requested quotation