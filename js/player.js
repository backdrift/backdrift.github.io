const all_songs = [
  "assets/audio/releases/gray/1_7.mp3",
  "assets/audio/releases/gray/2_the day before.mp3",
  "assets/audio/releases/gray/3_Enol.mp3",
  "assets/audio/releases/gray/4_Mirrors.mp3",
  "assets/audio/releases/gray/5_Monoamine.mp3",
  "assets/audio/releases/gray/6_Poly.mp3",
  "assets/audio/releases/gray/7_Memories.mp3",
  "assets/audio/releases/gray/8_Waiting.mp3",
  "assets/audio/releases/lim/1_as time passes us by.mp3",
  "assets/audio/releases/lim/2_Racks.mp3",
  "assets/audio/releases/lim/3_2031.mp3",
  "assets/audio/releases/lim/4_X.mp3",
  "assets/audio/releases/lim/5_Obscured.mp3",
  "assets/audio/releases/lim/6_Sometimes, Goodtimes.mp3",
  "assets/audio/releases/lim/7_IZA.mp3",
  "assets/audio/releases/lim/8_3D Sandbox.mp3",
  "assets/audio/releases/lim/9_Computers.mp3",
  "assets/audio/releases/lim/10_808dance.mp3",
  "assets/audio/releases/lim/11_By the time you came back.mp3",
  "assets/audio/releases/lim/12_They Forgot You.mp3",
  "assets/audio/releases/suburbia/1_A Coming Of Age Story.mp3",
  "assets/audio/releases/suburbia/2_A Day To Remember.mp3",
  "assets/audio/releases/suburbia/3_Lark.mp3",
  "assets/audio/releases/suburbia/4_Long Shot.mp3",
  "assets/audio/releases/suburbia/5_Before It Happened.mp3",
  "assets/audio/releases/suburbia/6_Around The Neighborhood.mp3",
  "assets/audio/releases/suburbia/7_After It Happened.mp3",
  "assets/audio/releases/suburbia/8_Everything Is Fine.mp3",
  "assets/audio/releases/suburbia/9_Traffic Noise.mp3",
  "assets/audio/releases/suburbia/10_The End.mp3",
  "assets/audio/releases/empty/1_Null.mp3",
  "assets/audio/releases/empty/2_Winds.mp3",
  "assets/audio/releases/empty/3_Every Second.mp3",
  "assets/audio/releases/empty/4_Artificial.mp3",
  "assets/audio/releases/empty/5_Waiting2.mp3",
];

let audio = new Audio();
let currentIndex = Math.floor(Math.random() * all_songs.length);
let isPlaying = false;
let playedSongs = [];
let newIndex;

const current_song = document.getElementById("current_song");

function playShuffle() 
{
  if (!isPlaying) 
    {
      if (!audio.src) 
      {
        // If all songs have been played, reset the list
        if (playedSongs.length === all_songs.length) {
          playedSongs = [];
        }

        // Pick a new random song not in playedSongs
        do {
          newIndex = Math.floor(Math.random() * all_songs.length);
        } while (playedSongs.includes(newIndex));

        // Mark it as played
        playedSongs.push(newIndex);
        currentIndex = newIndex;
        audio.src = all_songs[currentIndex];
        getCurrentSong();
      }

      // audio.src = all_songs[currentIndex];
      audio.play();
      isPlaying = true;
      getCurrentSong();
      updatePlayPauseIcons();
      audio.onended = () => {
        // If all songs have been played, reset the list
        if (playedSongs.length === all_songs.length) {
          playedSongs = [];
        }

        // Pick a new random song not in playedSongs
        do {
          newIndex = Math.floor(Math.random() * all_songs.length);
        } while (playedSongs.includes(newIndex));

        // Mark it as played
        playedSongs.push(newIndex);
        currentIndex = newIndex;
        audio.src = all_songs[currentIndex];
        audio.play();
        getCurrentSong();
    };
  } 
  else 
  {
    audio.pause();
    isPlaying = false;
    updatePlayPauseIcons();
  }
}

function skipForward() {
  // If all songs have been played, reset the list
  if (playedSongs.length === all_songs.length) {
    playedSongs = [];
  }

  // Pick a new random song not in playedSongs
  do {
    newIndex = Math.floor(Math.random() * all_songs.length);
  } while (playedSongs.includes(newIndex));

  // Mark it as played
  playedSongs.push(newIndex);
  currentIndex = newIndex;

  // Play the new song
  audio.src = all_songs[currentIndex];
  audio.play();
  getCurrentSong();
}

// function skipBackward()
// {
//     currentIndex = playedSongs[(playedSongs.length - (count--)) % playedSongs.length]
//     audio.src = all_songs[currentIndex]
//     audio.play();
//     getCurrentSong();
// }

function getCurrentSong() {

  const gray = [
        "7", 
        "the day before",
        "Enol",
        "Mirrors",
        "Monoamine",
        "Poly",
        "Memories",
        "Waiting"
  ];

  const lim = [
        "as time passes us by",
        "Racks",
        "2031",
        "X",
        "Obscured",
        "Sometimes, Goodtimes",
        "IZA",
        "3D Sandbox",
        "Computers",
        "808dance",
        "By the time you came back...",
        "They Forgot You",
  ];

  const suburbia = [
        "A Coming Of Age Story",
        "A Day To Remember",
        "Lark",
        "Long Shot",
        "Before It Happened",
        "Around The Neighborhood",
        "After It Happened",
        "Everything Is Fine",
        "Traffic Noise",
        "The End"
  ];

  const empty = [
        "Null",
        "Winds",
        "Every Second",
        "Artifical",
        "Waiting, Pt. II"
  ];

  // split into parts by "/"
  const parts = all_songs[currentIndex].split("/"); 
  const album = parts[3];                 // "gray"
  const fileName = parts[4];              // "1_7.mp3"

  const parts2 = fileName.split("_"); 
  const n = parts2[0];
  const track_n = parts2[1];

  const parts3 = track_n.split(".mp3"); 
  const track = parts3[0];

  const newImage = document.createElement('img');
  newImage.src = "assets/images/" + album + "_cover.jpg";
  newImage.alt = album + " cover";
  newImage.style.width = "20px";  // make smaller
  newImage.style.height = "auto";
  newImage.style.borderRadius = "3px";
  newImage.style.position = "relative"
  newImage.style.top = "4px";

  let track_num = parseInt(n);
  if (album == "gray")
  {
      updateNowPlaying(album, gray[track_num - 1]);
      current_song.innerHTML = "Currently Playing: " + gray[track_num - 1] + " ";
      current_song.appendChild(newImage);
  }
  else if (album == "lim")
  {
      updateNowPlaying(album, lim[track_num - 1]);
      current_song.innerHTML = "Currently Playing: " + lim[track_num - 1] + " ";
      current_song.appendChild(newImage);
  }
  else if (album == "suburbia")
  {
      updateNowPlaying(album, suburbia[track_num - 1]);
      current_song.innerHTML = "Currently Playing: " + suburbia[track_num - 1] + " ";
      current_song.appendChild(newImage);
  }
  else if (album == "empty")
  {
      updateNowPlaying(album, empty[track_num - 1]);
      current_song.innerHTML = "Currently Playing: " + empty[track_num - 1] + " ";
      current_song.appendChild(newImage);
  }
}

function updateNowPlaying(album, trackName) {
  const currentSongBtn = document.getElementById("current_song");
  const albumLink = document.getElementById("album_link");

  // Update button text
  currentSongBtn.textContent = "Currently Playing: " + trackName;

  // Update the link to the specific album page
  albumLink.href = "releases/" + album + ".html";  
}

function updatePlayPauseIcons() {
  const playIcon = document.getElementById("playIcon");
  const pauseIcon = document.getElementById("pauseIcon");

  if (isPlaying) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline";
  } else {
    playIcon.style.display = "inline";
    pauseIcon.style.display = "none";
  }
}

// Optional helper to pause directly from pause button
function pauseAudio() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    current_song.innerHTML = "Not playing";
    updatePlayPauseIcons();
  }
}
