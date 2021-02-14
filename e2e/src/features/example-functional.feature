Feature: Functional Tests with Cucumber and Protractor

  Scenario: Protractor and Cucumber Functional Test
    Given I go to "http://localhost:4200/"
    When I click the home button
    Then I should see "Angular app is running!" in the page
    And I should see the rocket icon
