Feature: Api Status
    For de purpuso of knowing thet the server is working 
    for quality control 
    I want to know the status of the server

    Scenario: Check api status
    Given I send a GET request to 'api/status'
    Then The response status code should be 200