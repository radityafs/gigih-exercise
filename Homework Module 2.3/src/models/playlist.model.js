class Playlist {
  constructor(
    playlistId,
    playlistName,
    playlistDescription,
    playlistCount,
    songs,
    createdAt,
    updatedAt,
    createdBy
  ) {
    this.playlistId = playlistId;
    this.playlistName = playlistName;
    this.playlistDescription = playlistDescription;
    this.playlistCount = playlistCount;
    this.songs = songs;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
  }

  static fromJson(json) {
    return new Playlist(
      json.playlistId,
      json.playlistName,
      json.playlistDescription,
      json.playlistCount,
      json.songs,
      json.createdAt,
      json.updatedAt,
      json.createdBy
    );
  }

  toJson() {
    return {
      playlistId: this.playlistId,
      playlistName: this.playlistName,
      playlistDescription: this.playlistDescription,
      playlistCount: this.playlistCount,
      songs: this.songs,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      createdBy: this.createdBy,
    };
  }
}

export default Playlist;
