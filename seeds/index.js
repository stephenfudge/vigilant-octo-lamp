const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedTeams = require('./teamsData');
const seedUser = require('./userData');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedTeams();

  await seedComment();

  process.exit(0);
};

seedAll();
