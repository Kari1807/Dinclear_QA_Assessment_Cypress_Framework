Feature: User Login and Logout
              As a user,I want to be able to login and logout of the application
              
        Scenario: User login with valid credentials
            Given the user is on the Login page
             When the user enters valid login credentials
              And clicks the Login button
             Then the user should be successfully logged in

        # Scenario: User logs in with invalid credentials
        #     Given the user is on the Login page
        #      When the user enters invalid login credentials
        #       And clicks the Login button
        #      Then the user should see an error message

        # Scenario: User logs out
        #     Given the user is logged in
        #      When the user clicks the Logout button
        #      Then the user should be logged out
        #       And redirected to the Login page