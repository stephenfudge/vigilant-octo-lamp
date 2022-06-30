// import stuff
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

//  defines table columns and how to allow data to be collected
Comment.init({
// id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
// user id column
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // },
    teams_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'teams',
            key: 'id'
        }
    },
// comment text column
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2]
        }
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
}
);

module.exports = Comment;