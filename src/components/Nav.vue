<template>
  <div id="nav">
    <div class="cursor"></div>
    <div id="loading">
      <div class="loading__wrapper">
        <div class="loading__wrapper__container">
          <img id="loading__logo" src="../assets/nav/logo_black.svg" alt="Logo PM">
        </div>
      </div>
      <p class="loader"></p>
    </div>
    <div class="color-choose">
      <p class="color-choose__click-info">CLICK</p>
      <div class="color-choose__info">
        <p>Knowing that my projects are realized according to the desires of my clients, I let you dive into my work according to your requirements.
          <br>
          <br>
          <strong class="info-strong">Which colour best describes you?</strong>
        </p>
      </div>
      <div class="color-choose__wrapper">
        <div class="color-choose__wrapper__container">
          <div class="color"></div>
          <div class="color"></div>
          <div class="color"></div>
          <div class="color"></div>
          <div class="color"></div>
          <div class="color"></div>
        </div>
      </div>
    </div>
    <div>
      <div id="menu-line">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.09 100.09">
          <g>
            <circle id="circleButton1" cx="12.5" cy="12.5" r="12.5"></circle>
            <circle cx="50.05" cy="12.5" r="12.5"></circle>
            <circle cx="87.59" cy="12.5" r="12.5"></circle>
            <circle cx="87.59" cy="50.05" r="12.5"></circle>
            <circle cx="51.15" cy="51.24" r="12.5"></circle>
            <circle cx="12.5" cy="51.24" r="12.5"></circle>
            <circle cx="12.5" cy="87.55" r="12.5"></circle>
            <circle cx="51.15" cy="87.55" r="12.5"></circle>
            <circle cx="87.59" cy="87.59" r="12.5"></circle>
          </g>
        </svg>
      </div>
      <router-link to="/">
        <div id="logo">
          <img src="../assets/nav/logo.svg" alt="Logo">
        </div>
      </router-link>
      <div class="nav-bar hiddenNav">
        <router-link class="nav-bar__block" to="/projects/jobask" title="featured project">
          <p>FEATURED</p>
        </router-link>
        <div class="nav-bar__block">
          <p class="nav-bar__block__menu-nb-projects">
            <strong>0</strong>
            <br>PROJECTS
            <br>
            <strong>MADE WITH
              <br>❤
            </strong>
          </p>
          <p
            class="nav-bar__block__menu-quote"
          >“ Creativity is nothing but the way to solve new problems. ”
            <br>
            <strong>- Diana Santos</strong>
          </p>
        </div>
        <div class="nav-bar__block">
          <span class="nav-bar__block__span-link">
            <router-link class="nav-bar__block__span-link__menu-a1" to="/">Home</router-link>

            <router-link class="nav-bar__block__span-link__menu-a2" to="/projects">Projects</router-link>

            <router-link class="nav-bar__block__span-link__menu-a3" to="/about">About</router-link>
          </span>
        </div>
      </div>
      <div id="columns-bg">
        <div id="columns-bg__one"></div>
        <div id="columns-bg__two"></div>
        <div id="columns-bg__three"></div>
        <div id="columns-bg__four"></div>
        <div id="columns-bg__five"></div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {
    elAppear: function() {
      $(window).load(function() {
        document.documentElement.style.setProperty(
          "--regular-color",
          "#00adb5"
        );

        document
          .querySelector(".color:first-child")
          .addEventListener("click", () => {
            TweenMax.staggerTo(
              ".color:not(:first-child)",
              1,
              {
                cycle: {
                  className: function(index) {
                    if (
                      document.querySelector(
                        ".color:not(:first-child).color-pos" + (index + 2)
                      )
                    ) {
                      return "-=color-pos" + (index + 2);
                    } else {
                      return "+=color-pos" + (index + 2);
                    }
                  }
                }
              },
              0.25
            );
            TweenMax.to(".color-choose__info p", 1, {
              y: 0,
              opacity: 1,
              ease: Back.easeOut.config(1)
            }).delay(0.5);
          });

        var allColor = document.querySelectorAll(".color:not(:first-child)");
        allColor.forEach(el => {
          el.addEventListener("click", function() {
            document.documentElement.style.setProperty(
              "--regular-color",
              window.getComputedStyle(this).getPropertyValue("background-color")
            );
            TweenMax.to(".color-choose__info p", 0.5, {
              y: "105%",
              oapcity: 0
            });
            TweenMax.to(".color-choose__wrapper", 0.5, {
              scale: 0,
              ease: Back.easeIn.config(2),
              onComplete: function() {
                TweenMax.to(".color-choose", 0.5, {
                  opacity: 0,
                  onComplete: function() {
                    TweenMax.to(".color-choose", 0, { visibility: "hidden" });
                  }
                });
              }
            });
          });
        });

        function hideMenu() {
          let timeHide = 0.25;
          TweenMax.to(".nav-bar__block:nth-child(1)", timeHide, {
            ease: Power1.easeIn,
            x: "-100%",
            onComplete: () => {}
          });

          TweenMax.to(".nav-bar__block:nth-child(2)", timeHide * 2, {
            ease: Power1.easeOut,
            y: "-200%",
            onComplete: () => {}
          });

          TweenMax.to(".nav-bar__block:nth-child(3)", timeHide, {
            ease: Power1.easeIn,
            y: "100%",
            onComplete: () => {
              document.querySelector(".nav-bar").classList.add("hiddenNav");
            }
          });
        }

        document.querySelector("#menu-line").addEventListener("click", () => {
          let projectsMade = 11;

          function start(counter) {
            if (counter < projectsMade) {
              setTimeout(function() {
                counter++;
                document.querySelector(
                  ".nav-bar__block__menu-nb-projects"
                ).innerHTML =
                  "<strong>" +
                  counter +
                  "</strong> <br />PROJECTS<br /><strong>MADE WITH <br /> ❤</strong>";
                start(counter);
              }, 200);
            }
          }
          start(0);

          if (document.querySelector(".nav-bar.hiddenNav")) {
            document.querySelector(".nav-bar").classList.remove("hiddenNav");
            TweenMax.to(".nav-bar__block:nth-child(1)", 0.25, {
              x: "0%",
              ease: Power1.easeIn
            });
            TweenMax.to(".nav-bar__block:nth-child(2)", 0.25, {
              y: "0%",
              ease: Power1.easeOut
            });
            TweenMax.to(".nav-bar__block:nth-child(3)", 0.25, {
              y: "0%",
              ease: Power1.easeIn
            });

            document
              .querySelector("#menu-line circle:nth-child(2)")
              .setAttribute("cx", 51.15);
            document
              .querySelector("#menu-line circle:nth-child(2)")
              .setAttribute("cy", 51.24);
            document
              .querySelector("#menu-line circle:nth-child(4)")
              .setAttribute("cx", 51.15);
            document
              .querySelector("#menu-line circle:nth-child(4)")
              .setAttribute("cy", 51.24);
            document
              .querySelector("#menu-line circle:nth-child(6)")
              .setAttribute("cx", 51.15);
            document
              .querySelector("#menu-line circle:nth-child(6)")
              .setAttribute("cy", 51.24);
            document
              .querySelector("#menu-line circle:nth-child(8)")
              .setAttribute("cx", 51.15);
            document
              .querySelector("#menu-line circle:nth-child(8)")
              .setAttribute("cy", 51.24);
          } else {
            hideMenu();
            document
              .querySelector("#menu-line circle:nth-child(2)")
              .setAttribute("cx", 50.05);
            document
              .querySelector("#menu-line circle:nth-child(2)")
              .setAttribute("cy", 12.5);
            document
              .querySelector("#menu-line circle:nth-child(4)")
              .setAttribute("cx", 87.59);
            document
              .querySelector("#menu-line circle:nth-child(4)")
              .setAttribute("cy", 50.05);
            document
              .querySelector("#menu-line circle:nth-child(6)")
              .setAttribute("cx", 12.5);
            document
              .querySelector("#menu-line circle:nth-child(6)")
              .setAttribute("cy", 51.24);
            document
              .querySelector("#menu-line circle:nth-child(8)")
              .setAttribute("cx", 51.15);
            document
              .querySelector("#menu-line circle:nth-child(8)")
              .setAttribute("cy", 87.55);
          }
        });
        document
          .querySelector(".nav-bar__block__span-link__menu-a1")
          .addEventListener("click", () => {
            hideMenu();
            closeMenu();
          });
        document
          .querySelector(".nav-bar__block__span-link__menu-a2")
          .addEventListener("click", () => {
            hideMenu();
            closeMenu();
          });
        document
          .querySelector(".nav-bar__block__span-link__menu-a3")
          .addEventListener("click", () => {
            hideMenu();
            closeMenu();
          });
        document
          .querySelector(".nav-bar__block")
          .addEventListener("click", () => {
            hideMenu();
            closeMenu();
          });

        document.querySelector("#logo").addEventListener("click", () => {
          hideMenu();
          closeMenu();
        });
      });

      function closeMenu() {
        document
          .querySelector("#menu-line circle:nth-child(2)")
          .setAttribute("cx", 50.05);
        document
          .querySelector("#menu-line circle:nth-child(2)")
          .setAttribute("cy", 12.5);
        document
          .querySelector("#menu-line circle:nth-child(4)")
          .setAttribute("cx", 87.59);
        document
          .querySelector("#menu-line circle:nth-child(4)")
          .setAttribute("cy", 50.05);
        document
          .querySelector("#menu-line circle:nth-child(6)")
          .setAttribute("cx", 12.5);
        document
          .querySelector("#menu-line circle:nth-child(6)")
          .setAttribute("cy", 51.24);
        document
          .querySelector("#menu-line circle:nth-child(8)")
          .setAttribute("cx", 51.15);
        document
          .querySelector("#menu-line circle:nth-child(8)")
          .setAttribute("cy", 87.55);
      }
      const cursor = document.querySelector(".cursor");
      let decaX = 7.5;
      let decaY = 7.5;

      document.addEventListener("mousemove", e => {
        if (e.pageX > window.innerWidth - 30) {
          decaX = 30;
        } else {
          decaX = 7.5;
        }
        if (e.pageY > window.innerHeight - 30) {
          decaY = 30;
        } else {
          decaY = 7.5;
        }
        cursor.setAttribute(
          "style",
          "top: " + (e.pageY - decaY) + "px; left: " + (e.pageX - decaX) + "px;"
        );
      });

      document.addEventListener("click", () => {
        cursor.classList.add("expand");

        setTimeout(() => {
          cursor.classList.remove("expand");
        }, 500);
      });
      $(window).scroll(function() {
        document.querySelector(".cursor").style.opacity = 0;
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

#nav {
  .color-choose {
    z-index: 999;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    &__click-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      opacity: 0.5;
      letter-spacing: 0.3rem;
      pointer-events: none;
    }
    &__info {
      width: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 5%;
      text-align: center;
      overflow: hidden;
      @media #{$mobile} {
        width: 80%;
        font-size: 0.75rem;
      }
      .info-strong {
        font-size: 1.5rem;
      }
      p {
        opacity: 0;
        transform: translateY(105%);
      }
    }
    &__wrapper {
      width: 50vw;
      height: 50vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: $center;
      @media #{$mobile} {
        width: 90vw;
        height: 90vw;
      }
      &__container {
        width: 15%;
        height: 15%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: $center;
        @media #{$mobile} {
          width: 20%;
          height: 20%;
        }
        .color {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transition: box-shadow 1s ease-in-out;
          transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
          &:nth-child(1) {
            background-color: #ffffff;
            animation: shadowLoop 4s infinite alternate;
            transition: transform 0.5s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            transform: scale(1.5);
            z-index: 2;
            &:hover {
              transform: scale(1.25);
              transform-origin: center center;
              transition: transform 0.5s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
          }
          &:nth-child(2) {
            background-color: #d04e52;
            transform: rotate(calc(((360 / 5) * 1) * 1deg)) translate(15%)
              scale(0.5);
            &:hover {
              box-shadow: 0px 0px 100px -10px rgba(#d04e52, 1);
              transition: box-shadow 1s ease-in-out;
              transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
            &.color-pos2 {
              transform: rotate(calc(((360 / 5) * 1) * 1deg)) translate(200%)
                scale(1);
              transition: box-shadow 1s ease-in-out;
              transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
          }
          &:nth-child(3) {
            background-color: #fb9057;
            transform: rotate(calc(((360 / 5) * 2) * 1deg)) translate(15%)
              scale(0.5);
            &:hover {
              box-shadow: 0px 0px 100px -10px rgba(#fb9057, 1);
              transition: box-shadow 1s ease-in-out;
            }
            &.color-pos3 {
              transform: rotate(calc(((360 / 5) * 2) * 1deg)) translate(200%)
                scale(1);
              transition: box-shadow 1s ease-in-out;
              transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
          }
          &:nth-child(4) {
            background-color: #f7c800;
            transform: rotate(calc(((360 / 5) * 3) * 1deg)) translate(15%)
              scale(0.5);
            &:hover {
              box-shadow: 0px 0px 100px -10px rgba(#f7c800, 1);
              transition: box-shadow 1s ease-in-out;
            }
            &.color-pos4 {
              transform: rotate(calc(((360 / 5) * 3) * 1deg)) translate(200%)
                scale(1);
              transition: box-shadow 1s ease-in-out;
              transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
          }
          &:nth-child(5) {
            background-color: #75a358;
            transform: rotate(calc(((360 / 5) * 4) * 1deg)) translate(15%)
              scale(0.5);
            &:hover {
              box-shadow: 0px 0px 100px -10px rgba(#75a358, 1);
              transition: box-shadow 1s ease-in-out;
            }
            &.color-pos5 {
              transform: rotate(calc(((360 / 5) * 4) * 1deg)) translate(200%)
                scale(1);
              transition: box-shadow 1s ease-in-out;
              transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
          }
          &:nth-child(6) {
            background-color: #595c80;
            transform: rotate(calc(((360 / 5) * 5) * 1deg)) translate(15%)
              scale(0.5);
            &:hover {
              box-shadow: 0px 0px 100px -10px rgba(#595c80, 1);
              transition: box-shadow 1s ease-in-out;
            }
            &.color-pos6 {
              transform: rotate(calc(((360 / 5) * 5) * 1deg)) translate(200%)
                scale(1);
              transition: box-shadow 1s ease-in-out;
              transition: transform 0.75s cubic-bezier(0.37, 1.56, 0.4, 1.01);
            }
          }
        }
      }
    }
  }
  .cursor {
    width: 15px;
    height: 15px;
    background-color: var(--regular-color);
    border-radius: 50%;
    z-index: 9999;
    position: absolute;
    pointer-events: none;
    mix-blend-mode: difference;
    transition-duration: 50ms;
    transition-timing-function: ease-out;
    transition: opacity 0.5s;
    @media #{$mobile} {
      visibility: hidden;
    }
  }
  .expand {
    animation: cursorClick 0.25s alternate-reverse;
    transform-origin: center;
  }
  @keyframes cursorClick {
    from {
      transform: scale(1, 1);
      opacity: 1;
      transform-origin: center;
    }
    to {
      transform: scale(3, 3);
      opacity: 0;
      transform-origin: center;
    }
  }

  #loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: #fff;
    .loader {
      position: absolute;
      font-size: 2rem;
      color: var(--regular-color);
      top: 65%;
      left: 50%;
      transform: $center;
    }
    .loading__wrapper {
      width: 20vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: $center;
      &__container {
        transition: 0.5s;
        width: 0%;
        overflow: hidden;
        img {
          width: 20vw;

          animation: flash 0.5s infinite ease-in-out alternate;
        }
      }
    }
  }

  #columns-bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: $center;
    margin-left: 0.5%;
    z-index: -101;
    height: 100vh;
    width: 100%;
    display: flex;
    @media #{$mobile} {
      display: none;
    }
    div {
      width: 20%;
      border-right: 1px solid $columns-color;
    }
  }

  #menu-line {
    width: 3.5vh;
    height: 3.5vh;
    position: fixed;
    z-index: 500;
    right: 3%;
    top: 3%;
    padding: 1.5vh;
    cursor: pointer;
    transition: 0.4s;
    background-color: white;
    border-radius: 100px;
    @media #{$mobile} {
      width: 5vh;
      height: 5vh;
      position: fixed;
      z-index: 500;
      left: 50%;
      transform: translateX(-50%);
      top: 88%;
      padding: 2vh;
      padding-bottom: 10vh;
      border-radius: 50px 50px 0 0;
      box-shadow: 0px 0px 26px -5px rgba(0, 0, 0, 0.33);
      cursor: pointer;
      background: white;
    }
    &:hover {
      box-shadow: 0px 0px 26px -5px rgba(0, 0, 0, 0.33);
      transition: 0.4s;
    }
    svg {
      width: 100%;
      height: 100%;
      pointer-events: none;
      g {
        fill: var(--regular-color);
      }
      circle {
        transition: 0.5s;
      }
    }
  }

  #logo {
    width: 7.5vh;
    position: fixed;
    z-index: 500;
    left: 3%;
    top: 3%;
    cursor: pointer;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--regular-color);
      mask: url("../assets/nav/logo.svg");
      mask-repeat: no-repeat;
      mix-blend-mode: multiply;
      content: "";
    }
    @media #{$mobile} {
      width: 7.5vh;
      position: fixed;
      z-index: 500;
      left: 50%;
      transform: translate(-50%);
      top: 6%;
      cursor: pointer;
    }
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1.5fr 2fr 3fr;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    text-align: center;
    @media #{$mobile} {
      position: fixed;
      top: 0;
      left: 0;
      display: grid;
      grid-template-rows: 1fr 1fr 2fr;
      grid-template-columns: auto;
      z-index: 100;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      text-align: center;
    }
    &.hiddenNav {
      visibility: hidden;
    }
    &__block {
      display: inline-block;
      transition: 0.5s ease-out;

      &:nth-child(1) {
        filter: grayscale(1);
        background-position: center;
        height: 100%;
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 3;
        transform: translateX(-100%);
        overflow: hidden;
        background-image: url("https://pierremouchan.com/img/projects/jobask/jobask-bg-header.png");
        @media #{$mobile} {
          background-color: red;
          filter: grayscale(1);
          background-position: center;
          background-size: inherit;
          height: 100%;
          grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 1;
          grid-row-end: 1;
          transform: translateX(-100%);
          transform: 0.3s;
        }
        &:hover {
          filter: grayscale(0);
        }
        p {
          color: white;
          filter: grayscale(0);
          text-shadow: 7px 7px 0px var(--regular-color);
          font-family: "Product Sans", sans-serif;
          transform: rotate(-90deg) translateY(-50%);
          transform-origin: center;
          position: absolute;
          top: 40%;
          left: -50%;
          font-weight: bold;
          font-style: italic;
          font-size: 15vh;
          @media #{$mobile} {
            color: white;
            filter: grayscale(0);
            text-shadow: 7px 7px 0px var(--regular-color);
            font-family: "Product Sans", sans-serif;
            transform: none;
            transform-origin: none;
            position: relative;
            top: initial;
            left: initial;
            font-weight: bold;
            font-style: italic;
            font-size: 8vh;
            margin-top: 15%;
          }
        }
      }
      &:nth-child(2) {
        background-color: var(--regular-color);
        filter: saturate(0.75) brightness(1.1);
        height: 100%;
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
        transform: translateY(-200%);
        @media #{$mobile} {
          height: 100%;
          grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 2;
          grid-row-end: 2;
          transform: translateY(-200%);
        }
        .nav-bar__block__menu-quote {
          background-color: var(--regular-color);
          filter: saturate(1.25);
          color: white;
          font-size: 2vh;
          width: 100%;
          padding: 20% 0 20% 0;
          position: absolute;
          bottom: 0;
          @media #{$mobile} {
            visibility: hidden;
          }
        }
        .nav-bar__block__menu-nb-projects {
          text-align: center;
          font-size: 7vh;
          color: white;
          line-height: 7vh;
          margin-top: 40%;
          @media #{$mobile} {
            margin-top: 10%;
            margin-bottom: 10%;
          }
        }
      }
      &:nth-child(3) {
        background-color: var(--regular-color);
        height: 100%;
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
        transform: translateY(100%);
        @media #{$mobile} {
          background-color: var(--regular-color);
          height: 100%;
          grid-column-start: 1;
          grid-column-end: 1;
          grid-row-start: 3;
          grid-row-end: 3;
          transform: translateY(100%);
        }
        a {
          color: white;
          position: relative;
          font-size: 5vh;
          font-weight: bold;
          text-decoration: none;
          &:hover {
            &:before {
              content: "";
              z-index: -1;
              background-color: var(--regular-color);
              filter: saturate(0.75) brightness(1.1);
              height: 3vh;
              width: 80%;
              position: absolute;
              top: 50%;
              left: 65%;
              transform: translateX(-50%);
              transition: 0.5s;
            }
          }
          &:before {
            content: "";
            z-index: -1;
            background-color: var(--regular-color);
            filter: saturate(0.75) brightness(1.1);
            height: 3vh;
            width: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            transition: 0.5s;
          }
        }
        .nav-bar__block__span-link {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          height: 50%;
          @media #{$mobile} {
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 50%;
          }
        }
      }
    }
  }
}
@keyframes flash {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes shadowLoop {
  0% {
    box-shadow: 0px 0px 100px -10px rgba(#f33a4a, 0.4);
  }
  12.5% {
    box-shadow: 0px 0px 100px 0px rgba(#f6a049, 0.4);
  }
  40% {
    box-shadow: 0px 0px 100px -10px rgba(#f7e661, 0.4);
  }
  37.5% {
    box-shadow: 0px 0px 100px 0px rgba(#6dce87, 0.4);
  }
  50% {
    box-shadow: 0px 0px 100px -10px rgba(#5092fc, 0.4);
  }
  62.5% {
    box-shadow: 0px 0px 100px 0px rgba(#011ea2, 0.4);
  }
  75% {
    box-shadow: 0px 0px 100px -10px rgba(#281461, 0.4);
  }
  100% {
    box-shadow: 0px 0px 100px 0px rgba(#272727, 0.4);
  }
}
</style>

