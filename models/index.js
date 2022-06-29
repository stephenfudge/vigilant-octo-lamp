const User = require('./user');
const Comments = require('./comments');
const Teams = require('./teams');

User.hasMany(Comments, {
  foreignKey: 'user_id',
});

Comments.belongsTo(User, {
  foreignKey: 'user_id',
});

Teams.hasMany(User, {
  foreignKey: 'my_team',
});

User.belongsTo(Teams, {
  foreignKey: 'my_team',
})

Teams.hasMany(Comments, {
  foreignKey: 'country_id',
})

Comments.belongsTo(Teams,{
  foreignKey: 'country_id'
})

module.exports = { User, Comments, Teams };
