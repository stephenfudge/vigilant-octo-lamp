// import stuff
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Teams extends Model {}

//  defines table columns and how to allow data to be collected
Teams.init({
// id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
// country name column
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
// fifa ranking column
    fifa_ranking: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
    // what   
        group_letter: {
        type: DataTypes.STRING,
        allowNull: false,
       },
       // capital of country
        capital: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        times_won: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        star_player: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'teams',
}
);

module.exports = Teams;