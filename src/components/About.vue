<template>
  <div id="about">
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
    <div id="h1-container">
      <h1>Hi again!</h1>
    </div>
    <a id="cv" href="static/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
    <div id="about__desc">
      <p>
        I'm a web / design student in the
        <a
          href="http://mmimontbeliard.com"
          target="_blank"
          rel="noopener noreferrer"
        >DUT MMI de Montbéliard</a>
        in France. If you want to suggest me any projects about design / web development, don't hesitate !
        <br>
        <em>This portfolio was made with VueJS and plenty of other supercool libraries.</em>
        <br>
      </p>
    </div>
    <div id="me-picture">
      <img src="https://pierremouchan.com/img/about/pierre_mouchan.png" alt="Pierre Mouchan">
    </div>
    <div id="getintouch">
      <a href="mailto:pierre.mouchan@gmail.com?subject=Let's work together !">
        <span>Get in touch !</span>
      </a>
      <br>
      <p id="getintouch-joke"></p>
    </div>
    <div id="reseaux">
      <a
        href="https://www.instagram.com/pierre_mouchan/"
        target="_blank"
        rel="noopener noreferrer"
      >Instagram</a>
      
      <a
        href="https://www.linkedin.com/in/pierre-mouchan-929165155/"
        target="_blank"
        rel="noopener noreferrer"
      >Linkedin</a>
      
      <a
        href="https://www.facebook.com/profile.php?id=100009602180064"
        target="_blank"
        rel="noopener noreferrer"
      >Facebook</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  methods: {
    elAppear: function() {
      TweenMax.to("#about__desc p", 1, { y: "0" }).delay(0.75);
      TweenMax.to("#getintouch a", 1, { opacity: "1", ease: Expo.ease }).delay(
        1.5
      );
      TweenMax.to("#circle1", 1, {
        top: "20%",
        left: "5%",
        ease: Back.easeOut.config(1.5)
      }).delay(0.5);
      TweenMax.to("#circle2", 1, {
        top: "10%",
        right: "5%",
        ease: Back.easeOut.config(1.5)
      }).delay(0.6);
      TweenMax.to("#circle3", 1, {
        top: "60%",
        left: "40%",
        ease: Back.easeOut.config(1.5)
      }).delay(0.7);
      TweenMax.to("#circle4", 1, {
        top: "70%",
        right: "20%",
        ease: Back.easeOut.config(1)
      }).delay(0.8);
      TweenMax.fromTo(
        "#me-picture",
        0.3,
        { opacity: "0" },
        { opacity: "1", ease: Expo.easeIn }
      ).delay(1);
      TweenMax.to("h1", 1, { y: 0, ease: Expo.ease }).delay(1);
      TweenMax.staggerTo(
        "#reseaux a",
        1,
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.4), delay: 1 },
        0.25
      );
      var typed = new Typed("#getintouch-joke", {
        strings: [
          "Hey you .... ! ^1000",
          "I can build something cool for you ! :) ^1000",
          "Click above !"
        ],
        typeSpeed: 50,
        backSpeed: 15,
        loop: false
      });
    }
  },
  mounted() {
    this.elAppear();
  }
};
</script>

<style lang="scss" scoped>
@import "../global";

#about {
  #circle1,
  #circle2,
  #circle3,
  #circle4 {
    position: absolute;
    z-index: -10;
    circle {
      fill: var(--regular-color);
    }
  }
  #circle1 {
    top: -20%;
    left: -20%;
    width: 20%;
  }
  #circle2 {
    top: -20%;
    right: -20%;
    width: 15%;
  }
  #circle3 {
    top: -20%;
    left: -40%;
    width: 10%;
  }
  #circle4 {
    top: -20%;
    right: -20%;
    width: 15%;
  }
  #h1-container {
    margin-top: 15vh;
    margin-left: 10vw;
    overflow: hidden;
    h1 {
      display: inline-block;
      font-size: 12vh;
      transform: translateY(-105%);
      @media #{$mobile} {
        font-size: 6vh;
      }
    }
  }
  #cv {
    position: fixed;
    z-index: 10;
    bottom: 3%;
    right: 3%;
    text-decoration: none;
    color: white;
    background-color: var(--regular-color);
    border-radius: 100px;
    font-weight: bolder;
    font-size: 2vh;
    padding: 1vw;
    transition: 0.2s;
    box-shadow: 0px 0px 46px -15px rgba(0, 0, 0, 1);
    &:hover {
      background-color: white;
      color: var(--regular-color);
      box-shadow: 0px 0px 46px -15px rgba(0, 0, 0, 1);
      transition: 0.2s;
    }
    @media #{$mobile} {
      padding: 1.5vw;
      padding-bottom: 1.4vw;
      right: 6%;
    }
  }
  &__desc {
    width: 40vw;
    margin-left: 10vw;
    margin-top: 5vh;
    margin-bottom: 5vh;
    overflow: hidden;
    @media #{$mobile} {
      width: 80%;
      margin-top: 65vh;
    }
    p {
      display: inline-block;
      animation-delay: 0.5s;
      transform: translateY(105%);
      font-weight: 500;
      font-size: 2.5vh;
      @media #{$mobile} {
        font-size: 2vh;
      }
      a {
        color: var(--regular-color);
        text-decoration: none;
        transition: 0.2s;
        &:hover {
          background-color: var(--regular-color);
          color: white;
          transition: 0.2s;
        }
      }
    }
  }
  #me-picture {
    z-index: -1;
    width: 32vw;
    height: 75vh;
    opacity: 1;
    position: absolute;
    top: 46vh;
    transform: translateY(-50%);
    right: 15%;
    @media screen and (max-width: 1200px) {
      width: 40vw;
    }
    @media screen and (max-width: 900px) {
      width: 50vw;
    }
    @media #{$mobile} {
      width: 70vw;
      height: 50vh;
      display: block;
      margin: 0 auto;
      top: 55vh;
    }
    img {
      opacity: 0.95;
      min-width: 100%;
      min-height: 100%;
      max-width: 120%;
      max-height: 120%;
      @media #{$mobile} {
        transform: translateX(-5%);
      }
    }
  }
  #getintouch {
    margin-left: 10vw;
    a {
      text-decoration: underline;
      font-weight: bolder;
      font-family: $title-font;
      font-size: 10vh;
      color: black;
      transition: 0.2s;
      opacity: 0;
      @media #{$mobile} {
        font-size: 6vh;
        padding-bottom: 20vh;
      }
      &:hover {
        color: var(--regular-color);
        transition: 0.2s;
      }
    }
  }
  #reseaux {
    margin-top: 2.5%;
    margin-left: 10%;
    opacity: 0.8;
    overflow: hidden;
    @media #{$mobile} {
      margin-bottom: 10vh;
    }
    a {
      display: inline-block;
      font-size: 3vh;
      color: black;
      transform: translateY(105%);
      opacity: 0;
      transition: color 0.2s;
      &:not(last-child) {
        margin-right: 5%;
      }
      &:hover {
        color: var(--regular-color);
        transition: 0.2s;
      }
    }
  }
  #getintouch-joke {
    font-size: 1.5rem;
    display: inline;
    opacity: 0.6;
  }
}
</style>

