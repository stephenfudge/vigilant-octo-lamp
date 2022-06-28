const User = require('./User');
const Comments = require('./Comments');
const Teams = require('./Teams');

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Comments, Teams };
