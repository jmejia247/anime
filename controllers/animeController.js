const express = require("express");
const anime = express.Router();
const { getAllAnimes } = require("../queries/animes");

const favAnime = require("../models/anime");

anime.get("/", async (req, res) => {
  const animes = await getAllAnimes();
  console.log(animes);
  res.status(200).json(animes);
});

anime.post("/new", async (req, res) => {
  const newAnime = req.body;
  favAnime.push(newAnime);
  res.status(200).json(favAnime);
});

module.exports = anime;
