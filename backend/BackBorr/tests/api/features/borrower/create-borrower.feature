Feature: Register an new borrower
    In order to han an account
    As an posible borrower
    I want to create a new account

    Scenario: A valin non existing borrower
        Given I send a PUT request to "/api/borrower/ef8ac118-8d7f-49cc-abec-78e0d05af80a" with body:
        """
        {
            "id": "ef8ac118-8d7f-49cc-abec-78e0d05af80a",
            "name": "Jose Luis",
            "lastname": "Sandoval",
            "rfc": "SAAL870512MJ8",
            "phone": "7352096019",
            "email": "docs.huehue@gmail.com",
            "password": "test"
        }
        """

    Then The response status code should be 201
    And The response should be empty