const router = require('express').Router()
const UserController = require('../controllers/userController')
const CountryController = require('../controllers/countryControllers')
const ReportController = require('../controllers/reportController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/login', UserController.login)
router.get('/countries', authentication, CountryController.getAll)
router.get('/reports', authentication, ReportController.showAll)
router.post('/reports', authentication, ReportController.addReport)
router.delete('/reports/:id', authentication, authorization, ReportController.deleteReport)


module.exports = router