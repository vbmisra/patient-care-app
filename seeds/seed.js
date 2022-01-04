const sequelize = require('../config/connection')
const { Patient, Provider, User } = require('../models')

const patientSeedData = require('./patientData.json')
const providerSeedData = require('./providerData.json')
const userSeedData = require('./userData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    const patients = await Patient.bulkCreate(patientSeedData)

    for (const { id } of patients) {
        const newProvider = await Provider.create({
            patient_id: id,
        })
    }

    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    })

    process.exit(0)
}

seedDatabase()
