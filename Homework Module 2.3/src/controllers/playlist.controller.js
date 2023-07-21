import {
  getPlaylists as Playlists,
  getPlaylistById as Playlist,
} from "../services/playlist.service.js";
import { sort as SortObject } from "../utils/object.js";

const getPlaylists = async (req, res) => {
  const { sort } = req.query;

  if (sort && !["asc", "desc"].includes(sort)) {
    return res
      .status(400)
      .json({ status: 400, message: "Invalid sort direction" });
  }

  const playlists = await Playlists();

  if (!playlists) {
    return res.status(404).json({ status: 404, message: "Playlist not found" });
  }

  try {
    if (!sort) {
      return res
        .status(200)
        .json({ status: 200, data: playlists, message: "Success" });
    }

    return res.status(200).json({
      status: 200,
      data: SortObject(playlists, "playlistCount", sort),
      message: "Success",
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

const getPlaylistById = async (req, res) => {
  const { id } = req.params;

  const playlist = await Playlist(id);

  try {
    return res
      .status(200)
      .json({ status: 200, data: playlist, message: "Success" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

export { getPlaylists, getPlaylistById };
