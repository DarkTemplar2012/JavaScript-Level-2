describe("Playlist", function(){
  var playlist, song = new Song("Pink Floyd", "The dark side of the moon", "Rock");

  beforeEach(function(){
    playlist = new Playlist();
  });

  it("should be able to add a song to playlist", function(){
    playlist.addSong(song);
    expect(playlist.getSong(0)).toBe(song);
  });

  it("shoud be able to delete a song from playlist", function(){
    playlist.addSong(song);
    playlist.removeSong(0);
    expect(playlist.getSong(0)).not.toBeDefined();
  });
});