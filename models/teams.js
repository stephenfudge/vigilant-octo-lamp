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
        //Previous World Cup wins
        times_won: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //Best Player
        star_player: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Big Flag Image
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Thumbnail Flag Image
        flag: {
            type: DataTypes.STRING,
            allowNull: true,
        }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'teams',
}
);

module.exports = Teams;