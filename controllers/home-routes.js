const router = require('express').Router();
const Comment  = require('../models/Comments');
const User = require("../models/User");
const Teams = require("../models/Teams");

const bcrypt = require('bcrypt');


const withAuth = require('../utils/auth')


router.get('/', async (req, res) => {
  const teamData = await Teams.findAll().catch((err) => { 
      res.json(err);
    });
      const teams = teamData.map((blog) => blog.get({ plain: true }));
      console.log('==================')
      console.log(teams)
      const groupA = teams.filter( group =>{
        return group.group === 'A';
      });
      const groupB = teams.filter( group =>{
        return group.group === 'B';
      });
      const groupC = teams.filter( group =>{
        return group.group === 'C';
      });
      const groupD = teams.filter( group =>{
        return group.group === 'D';
      });
      const groupE = teams.filter( group =>{
        return group.group === 'E';
      });
      const groupF = teams.filter( group =>{
        return group.group === 'F';
      });
      const groupG = teams.filter( group =>{
        return group.group === 'G';
      });
      const groupH = teams.filter( group =>{
        return group.group === 'H';
      });
      console.log(groupA)
      res.render('homepage', { teams, groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH});
    });





module.exports = router;