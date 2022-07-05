const User = require('./user');
const Comment = require('./comments');
const Teams = require('./teams');
const DreamTeam = require('./dreamteam')

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

User.hasMany(DreamTeam, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

DreamTeam.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Comment, Teams, DreamTeam };
