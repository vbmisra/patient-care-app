const { Model, DataTypes, UUIDV4 } = require('sequelize')
const sequelize = require('../config/connection')

class Patient extends Model {}

Patient.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        symptoms: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        provider_id: {
            //maybe UUID for datatype
            type: DataTypes.INTEGER,
            references: {
                model: 'Provider',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
)

module.exports = Patient
