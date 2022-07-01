const router = require('express').Router();
// const Comment  = require('../models/comments');
// const User = require("../models/user");
// const Teams = require("../models/teams");

const { Comment, User, Teams} = require('../models');

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
      const commentData = await Comment.findAll().catch((err) => { 
        res.json(err);
      });
        const comments = commentData.map((comms) => comms.get({ plain: true }));
        console.log("======================")
        console.log(comments)
      // console.log(groupA)
      res.render('homepage', { teams, comments, groupA, groupB, groupC, groupD, groupE, groupF, groupG, groupH, logged_in: req.session.logged_in});
    });

    // router.get('/', async (req, res) => {
    //   const commentData = await Comment.findAll().catch((err) => { 
    //       res.json(err);
    //     });
    //       const comments = commentData.map((comms) => comms.get({ plain: true }));
    //       console.log("======================")
    //       console.log(comments)

    //       res.render('homepage', { comments, logged_in: req.session.logged_in});
    //     });

    // Get one country 
router.get('/country/:id', async (req, res) => {
  try {
    const dbTeamData = await Teams.findByPk(req.params.id,
       {
      include: [
        {
          model: Comment,
          // attributes: [
          //   // 'id',
          //   // 'comment_text',
          //   // 'user_id',
          //   // 'country_id',
          // ],
        },
        // {
        //   model: User,
        //   // atrributes: [
        //   //   // 'username',
        //   //   // 'id',
        //   //   // 'my_team',
        //   // ]
        // }
      ],
    }

    );

    const team = dbTeamData.get({ plain: true });
    console.log("=====================================================================")
    console.log(team);
    const countryComments = team.comments

    res.render('singlecountry', { team, countryComments, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Logout route destroys the session
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/comment', async (req, res) => {
  try {
      
      const newCommentData = await Comment.create({
      comment_text: req.body.comment_text,
      teams_id: req.body.teams_id,
      // user_id: req.session.user_id,
      });
      
      res.render('homepage')
  } catch (err) {
      console.log(err);
      res.status(400).json(err);
  }
  });


module.exports = router;