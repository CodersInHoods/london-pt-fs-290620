# Recipes Book App

###### Design link
<hr>
https://www.figma.com/file/VQz2NrvK8lPykD91kedoKJ/e-commerce_2?node-id=43%3A2
<hr>

#### Requirements
1. Should match design.
2. Use React Router to navigate between pages.
3. Use database to fetch recipes and store orders.
4. Main Page
    - when click on `Get started` it should navigate to receipts page.
    - Navigation menu should work.
5. PLP
    - when click on `Get started` it should scroll to list section.
    - On PLP when I click `See more` it should render 1 extra row of items.
    - when click on item it should navigate to PDP.
        - stay on the same url but change a component
6. PDP
    - when I click on `Add to basket` it should add item to basket
    - basket icon should be updated(quantity icon)
    - if I add the same product to basket it should increase quantity rather than render it as a separate.
7. Basket

    - user can update quantity for each item
    - user can remove item from the basket
    - when user click submit, you need to store the order to your database with customer details and ordered items.
        -   in the same time add a customer to `customers` list in DB for future mail campaigns. Make sure you don't add a customer twice(email check).
        