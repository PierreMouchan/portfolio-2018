<template>
  <div id="home">
    <div id="circle-container">
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
    </div>
    <div class="h1-container">
      <h1>Pierre Mouchan</h1>
    </div>

    <div class="h2-container">
      <h2>WEB STUDENT</h2>
    </div>
    <p class="currently">
      <strong>Hi !</strong>
      <br>I'm a french student from the
      <strong>DUT MMI (Métiers du multimédia et de l'internet)</strong> in
      Montbéliard and i'm currently an intern at
      <strong>Pixies Agency.</strong>
      If you want to work with me, don't hesitate to contact me !
      <br>
      <a href="mailto:pierre.mouchan@gmail.com">pierre.mouchan@gmail.com</a>
    </p>
    <a @click="toSelect" href="/projects" class="checkstuff-btn">Check my stuff !</a>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    elDisappear: function() {
      TweenMax.to("#circle1", 0.75, {
        right: "-100vh",
        ease: Back.easeIn.config(1.2)
      });
      TweenMax.to("#circle2", 0.75, {
        right: "-100vh",
        ease: Power1.easeIn
      }).delay(0.1);
      TweenMax.to("#circle3", 0.75, {
        left: "-100vh",
        ease: Back.easeIn.config(1.2)
      });
      TweenMax.to("#circle4", 0.75, {
        left: "-100vh",
        ease: Power1.easeIn
      }).delay(0.1);
      TweenMax.to("h1", 0.5, { y: "-105%", ease: Back.easeIn.config(1.5) });
      TweenMax.to("h2", 0.5, {
        y: "-105%",
        ease: Back.easeIn.config(1.5)
      }).delay(0.1);
      TweenMax.to(".currently", 0.5, {
        y: "100%",
        opacity: 0,
        ease: Back.easeIn.config(1.5)
      });
      TweenMax.to(".checkstuff-btn", 0.5, {
        fontSize: "0px",
        ease: Back.easeIn.config(6)
      });
    },
    toSelect: function(e) {
      e.preventDefault();
      this.elDisappear();
      setTimeout(() => {
        this.$router.push("/projects");
      }, 750);
    },
    toAbout: function(e) {
      e.preventDefault();
      this.elDisappear();
      setTimeout(() => {
        this.$router.push("/about");
      }, 750);
    },
    elAppear: function(time) {
      TweenMax.to("#circle1", 1, { top: "10vh", right: "-15vh" }).delay(time);
      TweenMax.to("#circle2", 1, { top: "55vh", right: "25vh" }).delay(time);
      TweenMax.to("#circle3", 1, { top: "20vh", left: "-20vh" }).delay(time);
      TweenMax.to("#circle4", 1, { top: "70vh", left: "10vh" }).delay(time);
      TweenMax.to(".currently", 1, { y: "0", opacity: 1 }).delay(time * 1.25);
      TweenMax.to("h1", 0.5, { y: "0", opacity: 1 }).delay(time * 1.5);
      TweenMax.to("h2", 0.5, { y: "0", opacity: 1 }).delay(time * 1.75);
    }
  },
  mounted() {
    this.elAppear(0);
  }
};
</script>


<style lang="scss" scoped>
@import "../global";

#home {
  #circle1,
  #circle2,
  #circle3,
  #circle4 {
    width: $initial-width-circle;
    position: fixed;
    z-index: -100;
    circle {
      fill: var(--regular-color);
    }
  }
  #circle1 {
    top: -55vh;
    right: -60vh;
    width: 35%;
    @media #{$mobile} {
      top: -20vh;
      right: -40vh;
      width: 10%;
    }
  }
  #circle2 {
    top: 65vh;
    right: -50vh;
    width: 20%;
    @media #{$mobile} {
      top: 55vh;
      right: -40vh;
      width: 10%;
    }
  }
  #circle3 {
    top: -30vh;
    left: -80vh;
    width: 40%;
    @media #{$mobile} {
      top: 0vh;
      left: -40vh;
      width: 10%;
    }
  }

  #circle4 {
    top: 70vh;
    left: -60vh;
    @media #{$mobile} {
      top: 60vh;
      left: -40vh;
      width: 10%;
    }
  }
  .h1-container {
    position: absolute;
    overflow: hidden;
    top: 20%;
    left: 30%;
    @media #{$mobile} {
      position: absolute;
      overflow: hidden;
      top: 20%;
      left: 5%;
    }
    h1 {
      font-family: "Product Sans", sans-serif;
      font-weight: bold;
      font-size: 6vh;
      transform: translateY(105%);
      @media #{$mobile} {
        font-family: "Product Sans", sans-serif;
        font-weight: bold;
        font-size: 4vh;
        transform: translateY(105%);
      }
      &:before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 60%;
        left: 1%;
        height: 3vh;
        width: 95%;
        background-color: var(--regular-color);
        @media #{mobile} {
          content: "";
          z-index: -1;
          position: absolute;
          top: 60%;
          left: 1%;
          height: 3vh;
          width: 95%;
          background-color: var(--regular-color);
        }
      }
    }
  }
  .h2-container {
    position: absolute;
    overflow: hidden;
    top: 28%;
    left: 35%;
    @media #{$mobile} {
      position: absolute;
      overflow: hidden;
      top: 25%;
      left: 10%;
    }
    h2 {
      font-family: "Product Sans", sans-serif;
      font-weight: bold;
      font-size: 6vh;
      transform: translateY(105%);
      @media #{$mobile} {
        font-family: "Product Sans", sans-serif;
        font-weight: bold;
        font-size: 4vh;
        transform: translateY(105%);
      }
      &:before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 60%;
        left: 1%;
        height: 3vh;
        width: 95%;
        background-color: var(--regular-color);
        @media #{$mobile} {
          content: "";
          z-index: -1;
          position: absolute;
          top: 60%;
          left: 1%;
          height: 3vh;
          width: 95%;
          background-color: var(--regular-color);
        }
      }
    }
  }
  .currently {
    position: absolute;
    font-family: "Poppins", sans-serif;
    color: black;
    font-size: 2vh;
    top: 40%;
    left: 35%;
    width: 35%;
    transform: translateY(100%);
    opacity: 0;

    @media #{$mobile} {
      position: absolute;
      font-family: "Poppins", sans-serif;
      color: black;
      font-size: 2vh;
      top: 40%;
      left: 17%;
      width: 70%;
    }
    a {
      color: var(--regular-color);
      font-weight: bold;
    }
  }
  .checkstuff-btn {
    color: var(--regular-color);
    border: 4px solid var(--regular-color);
    border-radius: 25px;
    padding: 0.5vh 2vh;
    font-size: 2vh;
    font-weight: bold;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.2s;
    cursor: pointer;
    text-decoration: none;
    @media #{$mobile} {
      color: var(--regular-color);
      border: 4px solid var(--regular-color);
      border-radius: 25px;
      padding: 0.5vh 2vh;
      font-size: 2vh;
      font-weight: bold;
      position: absolute;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);
      transition: 0.2s;
      cursor: pointer;
      text-decoration: none;
    }
    &:hover {
      color: white;
      background-color: var(--regular-color);
    }
  }
}
</style>




