// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:
const db = require("./database");
const Player = require("./players");

// establish relations using magic methods
const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });

    await Player.create({
      name: "Lebron James",
      team: "Lakers",
      position: "SF",
    });
    await Player.create({
      name: "Anthony Davis",
      team: "Lakers",
      position: "PF",
    });
    await Player.create({
      name: "Stephen Curry",
      team: "Warriors",
      position: "PG",
    });
    await Player.create({
      name: "Kevin Durant",
      team: "Suns",
      position: "SF",
    });
    await Player.create({
      name: "James Harden",
      team: "76ers",
      position: "SG",
    });
    await Player.create({
      name: "Kyrie Irving",
      team: "Mavericks",
      position: "PG",
    });

    console.log("Database synced!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  // Include your models in this exports object as well!
  syncAndSeed,
  models: {
    Player,
  },
  db,
};
