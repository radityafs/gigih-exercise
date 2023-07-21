import { Router } from "express";
import { getSong } from "../controllers/song.controller.js";

const router = Router();

router.get("/song/:id", getSong);

export default router;
