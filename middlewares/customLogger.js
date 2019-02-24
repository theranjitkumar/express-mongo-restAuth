var Logger = (req, res, next) => {
    console.log('Request IP: ', req.ip);
    next();
}
module.exports = Logger;