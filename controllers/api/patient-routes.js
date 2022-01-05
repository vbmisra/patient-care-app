const router = require('express').Router()
const { Patient } = require('../../models')

//create a patient
router.post('/', async (req, res) => {
    try {
        const newPatient = await Patient.create({
            name: req.body.name,
            email: req.body.email,
            symptoms: req.body.symptoms,
            height: req.body.height,
            weight: req.body.weight,
            provider_id: req.body.provider_id,
        })

        res.status(200).json(newPatient)
    } catch (err) {
        res.status(400).json(err)
    }
})

//delete a patient
router.delete('/:id', async (req, res) => {
    try {
        const patientData = await Patient.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })

        if (!patientData) {
            res.status(404).json({ message: 'No patient found with this id' })
            return;
        }

        res.status(200).json(patientData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//find one patient
router.get('/:id', async (req, res) => {
    try {
        const patientData = await Patient.findByPk({
            where: {
                id: req.params.id
            }
        })

        if (!patientData) {
            res.status(404).json({ message: 'No patient found with this id' })
            return
        }

        res.status(200).json(patientData)
    } catch (err) {
        res.status(500).json(err)
    }
})

//find all patients
router.get('/', async (req, res) => {
    try {
        const patientData = await Patient.findAll()
        res.status(200).json(patientData)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;