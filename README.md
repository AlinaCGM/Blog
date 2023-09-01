# FoodBlog

I'm currently working on the project, and it's not yet complete.

_Temporarily deployed on Render_

https://blog-client-wz90.onrender.com/

**Project Description**
This GitHub repository houses the source code for a web application comprising a backend (API) and a frontend (Client). The project is designed to provide users with various functionalities related to recipes, including registration, login, recipe viewing, commenting, rating, favoriting, and administration. Below, you'll find a breakdown of the main dependencies used in both the backend and frontend of this project.

### Backend (API)
Main Dependencies

Node.js: Runtime environment for server-side JavaScript.
Express: Web application framework for building APIs.
Mongoose: MongoDB object modeling tool.
bcrypt: Password hashing library.
jsonwebtoken: JWT authentication library.
passport: User authentication middleware.
axios: HTTP client for making API requests.
dotenv: Environment variable management.
cors: Cross-Origin Resource Sharing middleware.

### Frontend (Client)
Main Dependencies

React: JavaScript library for building user interfaces.
Redux: State management library.
axios: HTTP client for making API requests.
formik: Form management library.
react-router-dom: Routing library for navigation.
@mui/material: Material-UI library for UI components.
@mui/icons-material: Material-UI icons.
@react-oauth/google: OAuth2 authentication library.
yup: Schema validation library.
dotenv: Environment variable management.


### Key Features:
*_Responsive Design:_
My project features a responsive design that ensures a seamless user experience across a wide range of devices and screen sizes. Whether you're accessing it from a desktop computer, tablet, or smartphone, the interface will adapt to provide optimal usability and readability.

*_User Registration and Login:_
Users can register for an account and log in securely.
Recipe Viewing:

Unregistered users can view all recipes, their ratings, and comments.
Comments and Ratings:

Unregistered users can view and read comments and ratings.
Only logged-in users can leave comments and ratings.
Favorite Recipes:

Users can add recipes to their favorites, but they need to be logged in to view their favorite recipes.
Admin Features:

*_Users with admin privileges can access user management features._
Admins can ban users, promote users to admin, and manage user accounts.
![3](https://github.com/AlinaCGM/Blog/assets/71669291/5523b27c-026d-4906-b582-2aea8fe51f7f)

Admins can add, update, and remove recipes.
![1](https://github.com/AlinaCGM/Blog/assets/71669291/54b4c726-0b60-491e-9cbf-6644b089d68e)

Admins can view and remove comments made by users.
![2](https://github.com/AlinaCGM/Blog/assets/71669291/b6e0246a-6f11-4812-b663-527d7c76a96f)

This project offers a comprehensive recipe management system with role-based access control and authentication features to enhance the user experience and maintain data integrity.
