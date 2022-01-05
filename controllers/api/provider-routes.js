const router = require('express').Router()
const { Provider } = require('../../models')


router.post('/', async (req, res) => {
    try {
        const newPatient = await Provider.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            specialty: req.body.specialty,
            patient_id: req.body.patient_id,
        })

        res.status(200).json(newProvider)
    } catch (err) {
        res.status(400).json(err)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const providerData = await Provider.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        })

        if (!providerData) {
            res.status(404).json({ message: 'No provider found with this id' })
            return;
        }

        res.status(200).json(providerData)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const providerData = await Provider.findByPk({
            where: {
                id: req.params.id
            }
        })

        if (!providerData) {
            res.status(404).json({ message: 'No provider found with this id' })
            return
        }

        res.status(200).json(providerData)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/', async (req, res) => {
    try {
        const providerData = await Provider.findAll()
        res.status(200).json(providerData)
    } catch (err) {
        res.status(400).json(err)
    }
});
module.exports = router;
//needs req look at 19 home-routes//