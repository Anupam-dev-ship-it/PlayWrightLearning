Feature: Ecommerce Validation
    @validations
    Scenario Outline:  Placing the Order
        Given a login to Ecommerce2 application with username "<username>" and password "<password>"
        Then Verify error message is displayed

        Examples:
            | username              | password   |
            | anupampatel@email.com | Abc@123456 |
            | patel123@yahoo.com    | Abc@123456 |