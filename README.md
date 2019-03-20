# express-rest-api 
A complete blog web api backend with exrepress and monodb

live avelable: https://express-res-api.herokuapp.com/

####    Pre Request:
    1. should be installed nodejs version 8+
    2. should be install mongodb
    3. Go to root directory
    4. RUN: 
        npm install
        npm start
            OR
        npm run start:dev To run on development mode on nodemon
        
    4. create a user using /users route, (post) method,
    and minimal required field 
        {
            email: 'email@urdomai.com', 
            password: 'yourPassword'
        }
    5. got to /login POST method enter 
        {
            email: 'email@urdomai.com', 
            password: 'yourPassword'
        } 
         to get token 

    6. Finaly go to /users (CRUD) by passing auth token in header with bearer prefix
    example: Authorization: bearer <token>

####    account endpoints:
    /login (post) for get auth token and use it as authorized token in header
    example: Authorization: bearer <token>

####    users endpoints:
    /users (get, post)
    /users/id (find, delete, update)

####    posts endpoints:
    /posts (get, post)
    /posts/id (find, delete, update)
