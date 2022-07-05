// import Comment model
const  Comment  = require('../models/comments');

const commentData = [{
        teams_id: 4,
        comment_text: "best ever!"
    },
    {
        teams_id: 6,
        comment_text: "this is so cool"
    },
    {
        teams_id: 1, 
        comment_text: "WOAH! #1 team!"
    },
    {
        teams_id: 9,
        comment_text: "best team ever! "
    },
    {
        teams_id: 12, 
        comment_text: "love this team so much!"
    },
    {
        teams_id: 8,
        comment_text: "good work guys!"
    },
    {
        teams_id: 3,
        comment_text: "GREATEST GOAL SCORER OF ALL TIME!"
    },
    {
        teams_id: 31,
        comment_text: "good work!"
    },
]

// create variable to export data
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;