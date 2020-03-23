const { Report, Country } = require('../models')

class ReportController {

    static async showAll (req, res, next) {
        try {
            const reports = await Report.findAll({where:{userId:req.userData.id}})
            res.status(200).json(reports)
        } catch (err) {
            next(err)
        }
        
    }

    static async addReport (req, res, next) {
        let temp = null
        const { cases, CountryId } = req.body
        try {
            const reports = await Report.create({
                report:cases,
                CountryId,
                userId: req.userData.id
            })
            const country = await Country.findOne({where:{id:CountryId}})
            const addingCause = {
                name: country.name,
                cases: country.cases+reports.report,
                death: country.deaths,
                recovered: country.recovered
            }
            const updating = await Country.update(addingCause, {where:{id:country.id}})
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