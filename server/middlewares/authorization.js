const { Report } = require('../models')

module.exports = (req, res, next) => {
    Report.findOne({where:{id:req.params.id}})
    .then(data => {
        if(data.userId != req.userData.id) {
            next({
                status:404,
                msg:'Not authorized'
            })
        }
        next()
    })
    .catch(err => {
        next(err)
    })
}