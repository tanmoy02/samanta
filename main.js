// let menuTogglerWrapper;
// let menuToggler;
document.addEventListener("DOMContentLoaded", () => {
  // Menu toggler
  let menuTogglerWrapper = document.querySelector(
    ".site-navigation-toggle-holder"
  );
  let menuToggler = document.querySelector(".hambargar");

  const audioPlayer = document.querySelectorAll(
    ".audio-player-container .player"
  );

  for (const player of audioPlayer) {
    const playPauseButton = player.querySelector(".play-pause-button");
    const timer = player.querySelector(".timer");
    const progressBar = player.querySelector(".progress-bar");
    const volumeBtn = player.querySelector(".volume-btn");
    const audio = player.querySelector("audio");

    const wavesurfer = WaveSurfer.create({
      container: progressBar,
      waveColor: "#585755",
      progressColor: "#e5ac25",
      height: 50,
      barWidth: 1,
      barGap: 3,
      interact: true,
      responsive: true,
    });

    wavesurfer.load(audio.getAttribute("src"));

    playPauseButton.addEventListener("click", () => {
      if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        player.querySelector(".play-pause-button").classList.remove("playing");
      } else {
        wavesurfer.play();
        player.querySelector(".play-pause-button").classList.add("playing");
      }
    });

    volumeBtn.addEventListener("click", () => {
      wavesurfer.setMute(!wavesurfer.getMute());
      volumeBtn.classList.toggle("muted");
    });

    wavesurfer.on("audioprocess", () => {
      timer.innerHTML =
        wavesurfer.getCurrentTime() < 10
          ? "0" + wavesurfer.getCurrentTime().toFixed(2)
          : wavesurfer.getCurrentTime().toFixed(2);
    });

    wavesurfer.on("finish", () => {
      player.querySelector(".play-pause-button").classList.remove("playing");
    });
  }

  const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    spaceBetween: 16,
    allowTouchMove: false,
    breakpoints: {
      992: {
        slidesPerView: 3.25,
        centeredSlides: true,
        slidesOffsetBefore: 0,
      },
      640: {
        slidesPerView: 2.25,
        centeredSlides: false,
        slidesOffsetBefore: 40,
      },
      480: {
        slidesPerView: 1.25,
        centeredSlides: true,
        slidesOffsetBefore: 0,
      },
    },
  });

  if (menuToggler) {
    menuToggler.addEventListener("click", () => {
      menuTogglerWrapper.classList.toggle("active");
    });
  }
  document.addEventListener("click", (event) => {
    console.log(event.target);
  });
});
