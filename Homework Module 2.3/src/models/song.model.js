class Song {
  constructor(
    songId,
    songName,
    songGenre,
    playCounts,
    playlistId,
    createdAt,
    updatedAt,
    createdBy
  ) {
    this.songId = songId;
    this.songName = songName;
    this.songGenre = songGenre;
    this.playCounts = playCounts;
    this.playlistId = playlistId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
  }

  static fromJson(json) {
    return new Song(
      json.songId,
      json.songName,
      json.songGenre,
      json.playCounts,
      json.playlistId,
      json.createdAt,
      json.updatedAt,
      json.createdBy
    );
  }

  toJson() {
    return {
      songId: this.songId,
      songName: this.songName,
      songGenre: this.songGenre,
      playCounts: this.playCounts,
      playlistId: this.playlistId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createdBy: this.createdBy,
    };
  }
}

export default Song;
