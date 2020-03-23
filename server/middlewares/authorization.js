const { Report } = require('../models')

module.exports = (req, res, next) => {
    console.log(req.params.id)
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