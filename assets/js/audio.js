$(document).ready(function(){
    var audio = document.getElementById("audioPlayer");
    var playBtn = $(".play-btn");
    var pauseBtn = $(".pause-btn");

    // Play audio
    playBtn.click(function() {
      audio.play();
      playBtn.hide();
      pauseBtn.show();
    });
	
	// Hide download option
    audio.controlsList.add('nodownload');

    // Pause audio
    pauseBtn.click(function() {
      audio.pause();
      pauseBtn.hide();
      playBtn.show();
    });
  });