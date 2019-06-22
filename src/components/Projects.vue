<template>
  <div id="Projects">
    <div class="help-swiper">
      <div>SCROLL</div>
      <div>or</div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="197" height="130" viewBox="0 0 197 130">
          <g transform="translate(515 -266)">
            <g transform="translate(-448 266)" fill="none" stroke-width="3">
              <rect width="63" height="63" stroke="none"></rect>
              <rect x="1.5" y="1.5" width="60" height="60" fill="none"></rect>
            </g>
            <g transform="translate(-448 333)" fill="none" stroke-width="3">
              <rect width="63" height="63" stroke="none"></rect>
              <rect x="1.5" y="1.5" width="60" height="60" fill="none"></rect>
            </g>
            <g transform="translate(-381 333)" fill="none" stroke-width="3">
              <rect width="63" height="63" stroke="none"></rect>
              <rect x="1.5" y="1.5" width="60" height="60" fill="none"></rect>
            </g>
            <g transform="translate(-365 348.547)">
              <path
                d="M15.8,0,12.926,2.872,23.8,13.747H0v4.1H23.8L12.926,28.725,15.8,31.6,31.6,15.8Z"
              ></path>
            </g>
            <g transform="translate(-515 333)" stroke-width="3">
              <rect width="63" height="63" fill="none" stroke="none"></rect>
              <rect x="1.5" y="1.5" width="60" height="60" fill="none"></rect>
            </g>
            <g transform="translate(-467.403 380.144) rotate(180)">
              <path
                d="M15.8,0,12.926,2.872,23.8,13.747H0v4.1H23.8L12.926,28.725,15.8,31.6,31.6,15.8Z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
    <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g style="opacity:0.5">
        <circle cx="250" cy="250" r="250"></circle>
      </g>
    </svg>
    
    <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g style="opacity:0.5">
        <circle cx="250" cy="250" r="250"></circle>
      </g>
    </svg>
    
    <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g style="opacity:0.5">
        <circle cx="250" cy="250" r="250"></circle>
      </g>
    </svg>
    
    <svg id="circle4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g style="opacity:0.5">
        <circle cx="250" cy="250" r="250"></circle>
      </g>
    </svg>
    <div id="columns-bg" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <router-link to="/projects/jobask">
            <div class="swiper-slide__info">
              <p>Jobask</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/jobask/jobask-bg-header.png"
              alt="Jobask project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/clishare">
            <div class="swiper-slide__info">
              <p>Clishare</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/clishare/clishare-bg-header.png"
              alt="clishare project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/spacegame">
            <div class="swiper-slide__info">
              <p>Spacegame</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/spacegame/spacegame-bg-header.png"
              alt="spacegame project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/portfolios">
            <div class="swiper-slide__info">
              <p>Portfolios</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/portfolios/portfolios-bg-header.png"
              alt="portfolios project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/junglematch">
            <div class="swiper-slide__info">
              <p>Jungle Match</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/junglematch/junglematch-bg-header.png"
              alt="junglematch project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/design3d">
            <div class="swiper-slide__info">
              <p>Design 3D</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/design3d/design3d-bg-header.png"
              alt="design3d project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/posterdesign">
            <div class="swiper-slide__info">
              <p>Posters Design</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/posterdesign/posterdesign-bg-header.png"
              alt="posterdesign project"
            >
          </router-link>
        </div>
        <div class="swiper-slide">
          <router-link to="/projects/montrealthisweek">
            <div class="swiper-slide__info">
              <p>Montréal TW</p>
            </div>
            <img
              src="https://pierremouchan.com/img/projects/mtw/mtw-bg-header.png"
              alt="montreal this week project"
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {};
  },
  methods: {
    elAppear: function() {
      TweenMax.to(".swiper-slide", 0.25, {
        backgroundColor: "black"
      });

      TweenMax.to(".swiper-slide", 1.5, {
        borderRight: "none"
      }).delay(2.5);
      TweenMax.to("#circle1", 1, {
        top: "5%",
        left: "5%",
        ease: Back.easeOut.config(2)
      }).delay(0.5);
      TweenMax.to("#circle2", 1.5, {
        top: "7%",
        left: "70%",
        ease: Back.easeOut.config(2)
      }).delay(0.6);
      TweenMax.to("#circle3", 1.5, {
        top: "80%",
        right: "5%",
        ease: Back.easeOut.config(2)
      }).delay(0.7);
      TweenMax.to("#circle4", 1.5, {
        bottom: "2.5%",
        left: "10%",
        ease: Back.easeOut.config(2)
      }).delay(0.8);
    },

    swiper: function() {
      var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        center: true,
        loopedSlides: 8,
        nested: true,
        simulateTouch: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        keyboard: {
          enabled: true
        },
        mousewheel: {
          invert: false,
          sensitivity: 0.1
        }
      });
    }
  },

  mounted() {
    this.swiper();
    this.elAppear();
  }
};
</script>

<style lang="scss" scoped>
@import "../global";
#Projects {
  .help-swiper {
    font-family: $title-font;
    color: var(--regular-color);
    position: absolute;
    bottom: 5%;
    left: 55%;
    transform: translateX(-50%);
    div {
      display: inline-block;
    }
    div:last-child {
      height: 30px;
      svg {
        height: 100%;
        width: 45%;
        g {
          stroke: var(--regular-color);
        }
      }
    }
    @media #{$mobile} {
      visibility: hidden;
    }
  }
  #circle1,
  #circle2,
  #circle3,
  #circle4 {
    position: absolute;

    z-index: -100;
    circle {
      fill: var(--regular-color);
    }
  }
  #circle1 {
    width: 20%;
    top: -20%;
    left: -20%;
  }
  #circle2 {
    width: 10%;
    top: -20%;
    left: 120%;
  }
  #circle3 {
    width: 5%;
    top: 120%;
    right: -20%;
  }
  #circle4 {
    width: 25%;
    bottom: -20%;
    left: -30%;
  }
  #columns-bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: $center;
    z-index: -100;
    height: 50vh;
    width: 50vw;
    overflow: visible;
    @media #{$mobile} {
      width: 100vw;
      height: 100%;
    }
    .swiper-wrapper {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      div {
        position: relative;
        overflow: hidden;
        background-color: white;
        transition: transform 0.75s cubic-bezier(0.08, 1.08, 0.91, 0.94);
        img,
        video {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: $center scale(0.5, 0.5);
          transition: transform 0.5s;
          @media #{$mobile} {
            transform: $center scale(0.5, 0.5);
          }
        }
        @media #{$mobile} {
          transform: scale(1.25, 1.25);
          border-right: none;
        }
      }
      .swiper-slide {
        pointer-events: none;
        .swiper-slide__info {
          z-index: -1;
          position: absolute;
          top: 100%;
          left: 0;
          background: transparent;
        }
        img,
        video {
          opacity: 0.3;
        }
      }
      .swiper-slide-prev,
      .swiper-slide-next {
        img,
        video {
          opacity: 0.6;
        }
      }
      .swiper-slide-active {
        pointer-events: all;
        position: relative;
        animation: scaleActiveProject 0.5s forwards
          cubic-bezier(0.35, 1.58, 0.6, 1);
        z-index: 2;
        box-shadow: 0px 0px 133px -31px rgba(0, 0, 0, 1);
        transform-origin: center;
        transition: 0.75s cubic-bezier(0.08, 1.08, 0.91, 0.94);
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 50vh;
          background-color: var(--regular-color);
          animation: progressSlide 5.25s infinite linear;
        }
        &:hover {
          .swiper-slide__info {
            transition: 0.5s;
            top: 87.5%;
            p {
              margin-top: 1.5%;
              opacity: 1;
              transition: 0.75s;
            }
          }
        }
        .swiper-slide__info {
          z-index: 5;
          position: absolute;
          width: 100%;
          height: 15%;
          bottom: 0;
          left: 0;
          border: none;
          transition: 0.5s;
          @media #{$mobile} {
            top: 70%;
          }
          background-color: var(--regular-color);
          p {
            text-align: center;
            margin-top: 25%;
            font-size: 2rem;
            color: white;
            opacity: 0;
            transition: 1s;
            @media #{$mobile} {
              opacity: 1;
              margin-top: 0;
              font-size: 1.5rem;
            }
          }
        }
        cursor: pointer;
        img,
        video {
          opacity: 1;
        }
      }
    }
  }
}

@keyframes scaleActiveProject {
  to {
    transform: scale(1.5, 1.5);
  }
}

@keyframes progressSlide {
  to {
    width: 100%;
  }
}
</style>
