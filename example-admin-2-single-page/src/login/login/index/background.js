particlesJS("particles-js", {
  particles: {
    number: {
      value: 10, // 圆点个数
      density: {
        enable: true,
        value_area: 300 //  线存在时间
      }
    },
    color: {
      value: "#6dadf8" // 圆点颜色
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0, //  圆点border
        color: "#000000" // 圆点border 颜色
      },
      polygon: {
        nb_sides: 500
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1, //  点透明度
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 10, // 点大小
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 400, // 线条数量
      color: "#6dadf8", //  线颜色
      opacity: 2, //  线条透明度
      width: 1 // 线条宽度
    },
    move: {
      enable: true, //  是否为动画
      speed: 3, //  动画速度
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { // 鼠标移入效果
        enable: false,
        mode: "repulse"
      },
      onclick: { // 鼠标点击效果
        enable: false,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true,
  config_demo: {
    hide_card: false,
    background_color: "#b61924",
    background_image: "",
    background_position: "50% 50%",
    background_repeat: "no-repeat",
    background_size: "cover"
  }
}

);
