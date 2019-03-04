var jwt = require('jsonwebtoken');
/* formate of token
   Authorization: bearer <access_token>
*/
var isAuthorized = (req, res, next) => {

    const bearerHeader = req.header('Authorization');
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
    } else {
        res.sendStatus(401);
    }

    jwt.verify(req.token, 'authsecret', (err, authData) => {
        if (err) throw err;
        console.log(authData);

    })


    next();
}
module.exports = isAuthorized;