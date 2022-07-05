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
//Right Wing
        Rw: {
            type: DataTypes.STRING,
            allowNull: false,
        },
//Centre Midfield
        Cm1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
//Centre Midfield 2
        Cm2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
//Left Wing
        Lw: {
            type: DataTypes.STRING,
            allowNull: false,
        },
//Striker 1
        St1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
//Striker 2
        St2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        //Links to user model
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'dreamteam',
}
);

module.exports = DreamTeam;