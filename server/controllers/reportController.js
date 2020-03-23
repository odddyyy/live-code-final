const { Report, Country } = require('../models')

class ReportController {

    static async getAll (req, res, next) {
        try {
            const reports = await Report.findAll()
            res.status(200).json(reports)
        } catch (err) {
            next(err)
        }
        
    }

    static async addReport (req, res, next) {
        const { cases, CountryId } = req.body
        try {
            const reports = await Report.create({
                report:cases,
                CountryId,
                userId: req.userData.id
            })
            const country = await Reports.findOne()
            console.log(country)
            res.status(201).json(reports)   
        } catch (err) {
            next(err)
        }
    }

    static async deleteReport (req, res, next) {
        try {
            const deleting = await Report.destroy({where:{id:req.params.id}})
            if (deleting == 0) {
                next({
                    status: 404,
                    msg:'cannot be found'
                })
            }
            res.status(200).json()
        } catch (err) {
            
        }
    }
}

module.exports = ReportController