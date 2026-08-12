const suburbia_songs = [
  "../../assets/audio/releases/suburbia/1_A Coming Of Age Story.mp3",
  "https://media.githubusercontent.com/media/backdrift/backdrift-assets/refs/heads/main/audio/releases/suburbia/2_A Day To Remember.mp3",
  "../../assets/audio/releases/suburbia/3_Lark.mp3",
  "../../assets/audio/releases/suburbia/4_Long Shot.mp3",
  "../../assets/audio/releases/suburbia/5_Before It Happened.mp3",
  "../../assets/audio/releases/suburbia/6_Around The Neighborhood.mp3",
  "../../assets/audio/releases/suburbia/7_After It Happened.mp3",
  "../../assets/audio/releases/suburbia/8_Everything Is Fine.mp3",
  "../../assets/audio/releases/suburbia/9_Traffic Noise.mp3",
  "../../assets/audio/releases/suburbia/10_The End.mp3"
]

let audio = new Audio();
let isPlaying = false
let song_id = 0;
getSong();


function playMusic(song) {
  audio.src = suburbia_songs[song - 1];
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
