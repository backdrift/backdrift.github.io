const gray_songs = [
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/1_7.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/2_the day before.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/3_Enol.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/4_Mirrors.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/5_Monoamine.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/6_Poly.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/7_Memories.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/gray/8_Waiting.mp3"]

let audio = new Audio();
let isPlaying = false
let song_id = 0;
getSong();


function playMusic(song) {
  audio.src = gray_songs[song - 1];
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
    playIcon.setAttribute('src', "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/images/buttons/pause.png")
  } else {
    // playIcon.style.display = "inline";
    // pauseIcon.style.display = "none";
    // playIcon.src = "../assets/images/buttons/play.png"
    playIcon.setAttribute('src', "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/images/buttons/play.png")
  }
}
