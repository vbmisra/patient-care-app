const router = require('express').Router()
const { Patient } = require('../../models')

//create a patient
router.post('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err)
    }
})

//delete a patient
router.delete('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})

//find all patients
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json(err)
    }
})

//find one patient
router.get('/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
})