// import User model
const  User  = require('../models/User');

const userData = [
    {
       username: "bobby",
       email: "bobby@mail.com",
       password: "pass1",
       my_team:  1,
    },
    {
        username: "annie_",
        email: "annie@mail.com",
        password: "pass2",
        my_team:  8,
    },
    {
        username: "mikey2",
        email: "mike@mail.com",
        password: "pass3",
        my_team:  21,
    },
    {
        username: "sue",
        email: "sue@mail.com",
        password: "pass4",
        my_team:  11,
    },
    {
        username: "ted",
        email: "ted@mail.com",
        password: "pass5",
        my_team:  6,
    },
    {
        username: "ashley",
        email: "ashley@mail.com",
        password: "pass6",
        my_team:  4,
    }
]

// setting variable to export data
const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;