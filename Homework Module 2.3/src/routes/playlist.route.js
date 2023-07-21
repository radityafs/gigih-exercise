import { Router } from "express";
import {
  getPlaylists,
  getPlaylistById,
} from "../controllers/playlist.controller.js";

const router = Router();

router.get("/playlists", getPlaylists);
router.get("/playlist/:id", getPlaylistById);

export default router;
