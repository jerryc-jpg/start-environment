const Sequelize = require("sequelize");
const db = require("./database");

const Player = db.define("players", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Player;
