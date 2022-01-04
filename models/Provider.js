// baseline model, will have Doctor, PA, NP, Nurse sub-groups
const { Model, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../config/connection')

class Provider extends Model {}

Provider.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        patient_id: {
            //maybe type is UUID?
            type: DataTypes.INTEGER,
            references: {
                model: 'Patient',
                key: 'id',
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        specialty: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
)

module.exports = Provider;