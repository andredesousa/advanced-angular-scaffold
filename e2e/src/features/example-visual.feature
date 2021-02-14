Feature: Visual Tests with Cucumber and Protractor

  Scenario: Protractor and Cucumber Visual Test
    Given I go to "http://localhost:4200/"
    When I define the "twitter-logo" icon baseline
    And I define the "rocket" icon baseline
    Then the "twitter-logo" icon matches the baseline
    And the "rocket" icon matches the baseline
