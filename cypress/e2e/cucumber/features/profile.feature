Feature: User Profile
              As a user, I want to view and edit my profile information on Insurance Broker System

        Scenario: User edits their profile
            Given the user is logged in
             When the user navigates to the Profile Edit page
              And makes changes to their profile information
             Then the user should see a success message

        Scenario: User views their profile
            Given the user is logged in
             When the user navigates to the Profile View page
             Then the user should see their profile information