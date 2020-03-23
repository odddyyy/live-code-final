const { verifyToken } = require('../helpers/token')

module.exports = (req, res, next) => {
    const { token } = req.headers
    if (!token) {
        next({
            status:400,
            msg:'No token'
        })
    }
    try {
        req.userData = verifyToken(token)
        next()
    } catch (err) {
        next(err)
    }
}