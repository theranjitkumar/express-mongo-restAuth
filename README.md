# express-mongo-restAuth
A complete blog web api backend with exrepress and monodb

####    Pre Request:
        1. should be installed nodejs version 8+
        2. should be install mongodb
        3. Go to root directory
        4. run npm install and then npm start
        4. create a user using /users route, (post) method, and minimal required field {email: 'email@urdomai.com', password: 'yourPassword'}
        5. got to /login to get token and go ahed...

####    account endpoints:
        /login (post) for get auth token and use it as authorized token in header
        example: Authorization: bearer <token>

####    users endpoints:
        /users (get, post)
        /users/id (find, delete, update)

####    posts endpoints:
        /posts (get, post)
        /posts/id (find, delete, update)
