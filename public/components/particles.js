particlesJS("particles", {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: RandomHex(),
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1.5,
        color: RandomHex(),
      },
    },
    opacity: {
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: true,
      },
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 180,
      color: RandomHex(),
      opacity: 0.5,
      width: 0.8,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "push",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.3,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

window.addEventListener("scroll", function () {
  var scrollTopButton = document.querySelector(".scroll-top");
  if (this.window.pageYOffset > 200) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

function RandomHex() {
  var random = Math.random();
  var exponent = --random.toExponential().split("-")[1];

  random *= Math.pow(10, exponent);

  return "#" + (~~(random * (1 << 24))).toString(16);
}
