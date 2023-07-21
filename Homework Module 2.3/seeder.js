import { faker } from "@faker-js/faker";
import fs from "fs";

export const generate = (count) => {
  const playlist = [];
  const songs = [];

  for (let i = 0; i < count; i++) {
    const playlistId = faker.database.mongodbObjectId();
    const songGenre = faker.music.genre();
    for (let j = 0; j < Math.floor(Math.random() * 100) + 1; j++) {
      songs.push({
        songId: faker.database.mongodbObjectId(),
        songName: faker.music.songName(),
        songGenre,
        playCounts: faker.number.int({ min: 0, max: 1000000 }),
        playlistId,
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        createdBy: `${faker.person.firstName()} ${faker.person.lastName()}`,
      });
    }

    playlist.push({
      playlistId,
      playlistName: `${songGenre} Album`,
      playlistDescription: faker.lorem.sentence(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      createdBy: `${faker.person.firstName()} ${faker.person.lastName()}`,
    });
  }
  return {
    playlist,
    songs,
  };
};

(() => {
  const result = generate(100);
  fs.writeFileSync("./src/data/playlist.json", JSON.stringify(result.playlist));
  fs.writeFileSync("./src/data/songs.json", JSON.stringify(result.songs));
})();
