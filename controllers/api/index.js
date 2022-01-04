const router = require('express').Router()

const patientRoutes = require('./patient-routes')
// comment out once the provider routes is made ** might need to change name **
// const providerRoutes = require('./provider-routes')

router.use('/patients', patientRoutes)
// router.use('/providers', providerRoutes)

module.exports = router;
