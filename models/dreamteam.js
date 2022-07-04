// import stuff
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class DreamTeam extends Model {}

//  defines table columns and how to allow data to be collected
DreamTeam.init({
// id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
// Goalkeepr
    Gk: {
        type: DataTypes.STRING, 
        allowNull: false,
        },
//RightBack
    Rb: {
        type: DataTypes.STRING,
        allowNull: false,
        },
//Centre Back1   
        Cb1: {
        type: DataTypes.STRING,
        allowNull: false,
       },
//Centre back 2
        Cb2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
//Left back 
        Lb: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Rw: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Cm1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Cm2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Lw: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        St1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        St2: {
            type: DataTypes.STRING,
            allowNull: true,
        }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dreamteam',
}
);

module.exports = DreamTeam;