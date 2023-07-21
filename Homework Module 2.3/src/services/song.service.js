import fs from "fs";
import Song from "../models/song.model.js";

export const getSong = (id) => {
  const songs = fs.readFileSync("./src/data/songs.json");

  const song = JSON.parse(songs).find((song) => song.songId === id);

  if (!song) {
    return null;
  }

  return Song.fromJson(song);
};
