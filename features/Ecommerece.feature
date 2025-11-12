Feature: Ecommerce Validation
    @regression
    Scenario: Placing the Order
        Given a login to Ecommerce application with username "anupampatel1236@xyz.com" and password "Abc@123456"
        When I add the product "ZARA COAT 3" to the cart
        Then verify "ZARA COAT 3" is displayed in the cart
        When Enter valid credentials "01" and "26" and "123" and "Anupam Patel" and place the order
        Then Verify OrderId is displayed in the Orders page

    @validations
    Scenario Outline:  Placing the Order
        Given a login to Ecommerce2 application with username "<username>" and password "<password>"
        Then Verify error message is displayed

        Examples:
            | username              | password   |
            | anupampatel@email.com | Abc@123456 |
            | patel123@yahoo.com    | Abc@123456 |