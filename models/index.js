const User = require('./User');
const Comments = require('./Comments');
const Teams = require('./Teams');

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasOne(Teams, {
  foreignKey: 'teams_id',
});

module.exports = { User, Comments, Teams };
