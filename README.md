# React e-commerce

## Purpose 

The purpose of this project is to reinforce React learnings, Fetching data, react-router-dom and use Firebase/Firestore.

## Tech stack
- **React**
- **HTML** 
- **SCSS** 
- **Firebase**
- **Firestore**

## Challenges

Able to connect to Firebase was a challenge I had to overcome. After reading the documentation and applying all knowledge learnt, I was able to connect my react app to Firebase and FireStore.


## MVP of the project

 E-shop website should have two pages:

-   Home Page
    -   This will contain:
        -   A Grid of products
        -   Carousel of featured products
        -   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
-   All products should be stored in Firestore:
    -   You should store the following information:
        -   quantity
        -   variants (could be colors, sizes, etc)
        -   price per unit
        -   name
        -   image url
        -   favourited or not (boolean)
            All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application
            
