import { getSong as Song } from "../services/song.service.js";

const getSong = async (req, res) => {
  try {
    const { id } = req.params;

    const playlist = Song(id);

    if (!playlist) {
      return res.status(404).json({ status: 404, message: "Song not found" });
    }

    return res
      .status(200)
      .json({ status: 200, data: playlist, message: "Success" });
  } catch (error) {
    res.status(500).json({ status: 500, message: error.message });
  }
};

export { getSong };
