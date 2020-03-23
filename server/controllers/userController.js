const { User } = require('../models')
const { createToken } = require('../helpers/token')

class UserController {

    static async login (req, res, next) {
        const { username, password } = req.body
        try {
            const logginIn = await User.findOne({where:{username:username, password:password}})
            if (!logginIn) {
                next({
                    status:400,
                    msg:'Invalid username / password'
                })
            }
            console.log(logginIn)
            const token = createToken({
                id: logginIn.id,
                username: logginIn.username
            })
            res.status(200).json({
                token: token,
                id: logginIn.id,
                username: logginIn.username
            })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = UserController