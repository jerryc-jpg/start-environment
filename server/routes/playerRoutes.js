const router = require("express").Router();
const  {Player}  = require("../db").models;

// grabs all players
router.get("/", async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (e) {
    next(e);
  }
});

//grabs player by id
router.get("/:id", async (req, res, next) => {
  try {
    const player = await Player.findByPk(req.params.id);
    res.send(player);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
