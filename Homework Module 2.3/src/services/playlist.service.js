import fs from "fs";
const songsJson = JSON.parse(fs.readFileSync("./src/data/songs.json"));
const playlistsJson = JSON.parse(fs.readFileSync("./src/data/playlist.json"));

import Playlist from "../models/playlist.model.js";

export const getPlaylists = async () => {
  const playlistModel = playlistsJson.map((playlist) => {
    let playlistCount = 0;

    const songs = songsJson.filter((song) => {
      if (song.playlistId === playlist.playlistId) {
        playlistCount += song.playCounts;
        return true;
      }
      return false;
    });

    return Playlist.fromJson({
      ...playlist,
      playlistCount,
      songs,
    });
  });

  return playlistModel;
};

export const getPlaylistById = async (id) => {
  const playlist = playlistsJson.find((playlist) => playlist.playlistId === id);

  if (!playlist) {
    return null;
  }

  let playlistCount = 0;
  const songs = songsJson.filter((song) => {
    if (song.playlistId === playlist.playlistId) {
      playlistCount += song.playCounts;
      return true;
    }
    return false;
  });

  return Playlist.fromJson({
    ...playlist,
    playlistCount,
    songs,
  });
};
