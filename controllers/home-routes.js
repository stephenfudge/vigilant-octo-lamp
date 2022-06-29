const router = require('express').Router();
const Comment  = require('../models/Comments');
const User = require("../models/User");
const Teams = require("../models/Teams");

const bcrypt = require('bcrypt');

// const { Blog, User, Comment} = require("../models")
const withAuth = require('../utils/auth')


router.get('/', async (req, res)  => {
    try {
        const teamData = await Teams.findAll();
        res.status(200).json(teamData);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;