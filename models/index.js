const User = require('./user');
const Comment = require('./comments');
const Teams = require('./teams');

// User.hasMany(Comments, {
//   foreignKey: 'user_id',
// });

// Comments.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// Teams.hasMany(User, {
//   foreignKey: 'team_id',
// });

// User.belongsTo(Teams, {
//   foreignKey: 'team_id',
// });

Teams.hasMany(Comment, {
  foreignKey: 'teams_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Teams, {
  foreignKey: 'teams_id',
});

module.exports = { User, Comment, Teams };
