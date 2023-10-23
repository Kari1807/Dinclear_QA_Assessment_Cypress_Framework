Feature: User Registration
              As a user, I want to register for the site so that I can access the site's features

        Scenario: User successfully registers with valid information
            Given the user is on the Registration page
             When the user provides valid registration information
              And clicks the Register button
             Then the user should be successfully registered
             
     #The below 2 scenarios are not automated as the application doesn't have the validations implemented        
        # Scenario: User provides invalid information during registration
        #     Given the user is on the Registration page
        #      When the user provides invalid registration information
        #       And clicks the Register button
        #      Then the user should see an error message

        # Scenario: User attempts to register with an existing username
        #     Given the user is on the Registration page
        #      When the user provides registration information with an existing username
        #       And clicks the Register button
        #      Then the user should see an error message
              
