const lim_songs = [
  "../../assets/audio/releases/lim/1_as time passes us by.mp3",
  "../../assets/audio/releases/lim/2_Racks.mp3",
  "../../assets/audio/releases/lim/3_2031.mp3",
  "../../assets/audio/releases/lim/4_X.mp3",
  "../../assets/audio/releases/lim/5_Obscured.mp3",
  "../../assets/audio/releases/lim/6_Sometimes, Goodtimes.mp3",
  "../../assets/audio/releases/lim/7_IZA.mp3",
  "../../assets/audio/releases/lim/8_3D Sandbox.mp3",
  "../../assets/audio/releases/lim/9_Computers.mp3",
  "../../assets/audio/releases/lim/10_808dance.mp3",
  "../../assets/audio/releases/lim/11_By the time you came back.mp3",
  "../../assets/audio/releases/lim/12_They Forgot You.mp3",
  "../../assets/audio/releases/lim/13_Just Dance (remix).mp3"
]

let audio = new Audio();
let isPlaying = false
let song_id = 0;
getSong();


function playMusic(song) {
  audio.src = lim_songs[song - 1];
  audio.play()
}


function clicked() {
  // getSong();

  if (isPlaying) {
    isPlaying = false
    updatePlayPauseIcons(song_id);
    audio.pause()
  } else {
    isPlaying = true;
    updatePlayPauseIcons(song_id);
    playMusic(parseInt(song_id));

    isFinished();
  }
}


function isFinished() {
  audio.addEventListener('ended', function() {
      isPlaying = false;
      updatePlayPauseIcons(song_id);
      console.log("Playback ended.");
    }, false);
}


function getSong() {
  const buttons = document.querySelectorAll('.play-button');
  // Loop through each button and add a click event listener
  buttons.forEach(button => {
      button.addEventListener('click', function(event) {
          // 'this' refers to the button that was clicked
          // event.target also refers to the button that was clicked

          song_id = this.id;
          // const clickedButtonId = event.target.id; // Alternate method

          console.log(`Button with ID: ${song_id} was clicked.`);
      });
  });
  console.log('clicked', song_id);
}

function updatePlayPauseIcons(song_id) {
  console.log('id', song_id)
  const playIcon = document.getElementById(song_id);

  if (isPlaying) {
    // playIcon.style.display = "none";
    // pauseIcon.style.display = "inline";
    // playIcon.src = "../assets/images/buttons/pause.png"
    playIcon.setAttribute('src', "../assets/images/buttons/pause.png")
  } else {
    // playIcon.style.display = "inline";
    // pauseIcon.style.display = "none";
    // playIcon.src = "../assets/images/buttons/play.png"
    playIcon.setAttribute('src', "../assets/images/buttons/play.png")
  }
}
