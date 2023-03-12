Feature: Register an new borrower
    In order to han an account
    As an posible borrower
    I want to create a new account

    Scenario: A valin non existing borrower
        Given I send a POST request to "/borrower" with body:
        """
        {
            "name": "Jose Luis",
            "lastname": "Jose Luis",
            "rfc": "Jose Luis",
            "phone": "Jose Luis",
            "email": "Jose Luis",
            "password": "Jose Luis",
        }
        """

    Then the response status code should be 201
    And the response should be empty