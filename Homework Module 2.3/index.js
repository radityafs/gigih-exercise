import express from "express";
import SongRoute from "./src/routes/song.route.js";
import PlaylistRoute from "./src/routes/playlist.route.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/", SongRoute);
app.use("/", PlaylistRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
