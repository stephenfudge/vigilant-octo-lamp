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
        return group.group_letter === 'A';
      });
      const groupB = teams.filter( group =>{
        return group.group_letter === 'B';
      });
      const groupC = teams.filter( group =>{
        return group.group_letter === 'C';
      });
      const groupD = teams.filter( group =>{
        return group.group_letter === 'D';
      });
      const groupE = teams.filter( group =>{
        return group.group_letter === 'E';
      });
      const groupF = teams.filter( group =>{
        return group.group_letter === 'F';
      });
      const groupG = teams.filter( group =>{
        return group.group_letter === 'G';
      });
      const groupH = teams.filter( group =>{
        return group.group_letter === 'H';
      });
      console.log(groupA)
      res.render('homepage', { teams, groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH});
    });

    // Get one country 
router.get('/country/:id', async (req, res) => {
  try {
    const dbTeamData = await Teams.findByPk(req.params.id,
       {
      include: [
        // {
        //   model: Comment,
        //   attributes: [
        //     'id',
        //     'comment_text',
        //     'user_id',
        //     'country_id',
        //   ],
        // },
        {
          model: User,
          atrributes: [
            'username',
            'id',
            'my_team',
          ]
        }
      ],
    }
    );

    const team = dbTeamData.get({ plain: true });
    console.log("=====================================================================")
    // // console.log(blog)
    // // console.log(blog.comments)
    // console.log(blog.user)
    // console.log(blog.user.user_name)
    // const comments = blog.comments
    res.render('singlecountry', { team, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});





module.exports = router;