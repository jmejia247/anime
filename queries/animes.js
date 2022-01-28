const db = require("../db/dbConfig");

const getAllAnimes = async () => {
  try {
    const animes = await db.any("SELECT * FROM anime;");
    return animes;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllAnimes,
};
