const router = require('express').Router();
// const Blog  = require('../models/blog');
// const User = require("../models/user");
// const Comment = require("../models/comment")

const bcrypt = require('bcrypt');

const { Teams, User, Comments} = require("../models")
const withAuth = require('../utils/auth')






module.exports = router;


