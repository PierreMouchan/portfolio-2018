<template >
  <div id="project">
    <router-link to="/projects" class="go-back">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="451.847px"
        height="451.847px"
        viewBox="0 0 451.847 451.847"
        style="enable-background:new 0 0 451.847 451.847;"
        xml:space="preserve"
      >
        <g>
          <path
            d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751
		c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0
		c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"
          ></path>
        </g>
      </svg>
    </router-link>
    <div id="clishare" v-if="this.$route.path == '/projects/clishare'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/clishare/clishare-bg-header.png"
          alt="clishare"
        >

        <div class="h1-container">
          <h1>Clishare</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/php-logo.png" alt="logo php">
        <img src="../assets/common/js-logo.svg" alt="logo js">
        <img src="https://pierremouchan.com/img/common/xd-logo.png" alt="logo xd">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <img
              src="https://pierremouchan.com/img/projects/clishare/clishare-main.png"
              alt="Img principal"
            >
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Partagez, Recevez, Progressez !</p>
        </parallax>
        <p
          class="section1__desc"
        >Clishare was a collective project during my first year at the DUT MMI in Montbéliard. We had to carry out an innovative project and then integrate it. Clishare is an application where we can give an appointment to people at a place in France to make photo sessions. It was an extremely rewarding experience for me.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img
            src="https://pierremouchan.com/img/projects/clishare/clishare-aside1.png"
            alt="clishare img"
          >
        </div>
        <div>
          <img
            src="https://pierremouchan.com/img/projects/clishare/clishare-aside2.png"
            alt="clishare img"
          >
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- spacegame -->
    <!-- spacegame -->
    <!-- spacegame -->
    <div id="spacegame" v-else-if="this.$route.path == '/projects/spacegame'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/spacegame/spacegame-bg-header.png"
          alt="spacegame"
        >

        <div class="h1-container">
          <h1>Spacegame</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/php-logo.png" alt="logo php">
        <img src="../assets/common/js-logo.svg" alt="logo js">
        <img src="https://pierremouchan.com/img/common/c4d-logo.png" alt="logo C4D">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <video loop autoplay>
              <source
                src="https://pierremouchan.com/img/projects/spacegame/spacegame-main.mp4"
                type="video/mp4"
              >Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Avoid the death and the meteors !</p>
        </parallax>
        <p
          class="section1__desc"
        >Spacegame was an interesting project to make. I made this whole project using a lot of libraries and scripts like threeJS (Orbitcontrol, keyboardstate), Firebase and JQuery. Previously, i designed every little 3D models that i used in this game like the spaceship and the meteors. I finalized it for a project made at Vanier college with a leaderboard and highest score from people.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img
            src="https://pierremouchan.com/img/projects/spacegame/spacegame-aside1.png"
            alt="spacegame img"
          >
        </div>
        <div>
          <img
            src="https://pierremouchan.com/img/projects/spacegame/spacegame-aside2.png"
            alt="spacegame img"
          >
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- portfolios -->
    <!-- portfolios -->
    <!-- portfolios -->
    <div id="portfolios" v-else-if="this.$route.path == '/projects/portfolios'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/portfolios/portfolios-bg-header.png"
          alt="portfolios"
        >

        <div class="h1-container">
          <h1>Portfolios</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/php-logo.png" alt="logo php">
        <img src="../assets/common/js-logo.svg" alt="logo js">
        <img src="https://pierremouchan.com/img/common/xd-logo.png" alt="logo xd">
        <img src="https://pierremouchan.com/img/common/ps-logo.png" alt="logo photoshop">
        <img src="https://pierremouchan.com/img/common/ai-logo.png" alt="logo illustrator">
        <img src="https://pierremouchan.com/img/common/pr-logo.png" alt="logo premierepro">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <video loop autoplay>
              <source
                src="https://pierremouchan.com/img/projects/portfolios/portfolios-main.mp4"
                type="video/mp4"
              >Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Finding the best solution !</p>
        </parallax>
        <p
          class="section1__desc"
        >Finding a good portfolio and personal design is difficult and requires a lot of research on the subject. So to make this portfolio, I had to design and developp other sites before and it helps me to discover new libraries like TweenMax, animeJS, threeJS, parallax etc... I had to make several prototypes on adobe XD also. Here is some of my portfolios that i designed before.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <video loop autoplay>
            <source
              src="https://pierremouchan.com/img/projects/portfolios/portfolios-aside1.mp4"
              type="video/mp4"
            >Your browser does not support HTML5 video.
          </video>
        </div>
        <div>
          <video loop autoplay>
            <source
              src="https://pierremouchan.com/img/projects/portfolios/portfolios-aside2.mp4"
              type="video/mp4"
            >Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- junglematch -->
    <!-- junglematch -->
    <!-- junglematch -->
    <div id="junglematch" v-else-if="this.$route.path == '/projects/junglematch'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/junglematch/junglematch-bg-header.png"
          alt="junglematch"
        >

        <div class="h1-container">
          <h1>Junglematch</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/c4d-logo.png" alt="logo c4d">
        <img src="../assets/common/js-logo.svg" alt="logo js">
        <img src="https://pierremouchan.com/img/common/php-logo.png" alt="logo php">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <img
              src="https://pierremouchan.com/img/projects/junglematch/junglematch-main.png"
              alt="junglematch"
            >
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Resolving fast puzzle !</p>
        </parallax>
        <p
          class="section1__desc"
        >During my semester in Canada in 2018, I had the opportunity to design a mobile game using different technologies and scripts. I decided to work on a game using some drag and drop from JQuery, 3D models from ThreeJS, Firebase for storing scores and JS for creating something functional. Mixing different libraries and technologies helps me to developp a complex and finished project.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img
            src="https://pierremouchan.com/img/projects/junglematch/junglematch-aside1.png"
            alt="junglematch"
          >
        </div>
        <div>
          <img
            src="https://pierremouchan.com/img/projects/junglematch/junglematch-aside2.png"
            alt="junglematch"
          >
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- design3D -->
    <!-- design3D -->
    <!-- design3D -->
    <div id="design3d" v-else-if="this.$route.path == '/projects/design3d'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/design3d/design3d-bg-header.png"
          alt="design3d"
        >

        <div class="h1-container">
          <h1>Design3D</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/lr-logo.png" alt="logo lightroom">
        <img src="https://pierremouchan.com/img/common/ps-logo.png" alt="logo ps">
        <img src="https://pierremouchan.com/img/common/c4d-logo.png" alt="logo c4d">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <img
              src="https://pierremouchan.com/img/projects/design3d/design3d-main.png"
              alt="design3d"
            >
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Creating unreal and stunning things !</p>
        </parallax>
        <p
          class="section1__desc"
        >During my spare time, i like to developp and learn new skills and knowledges on others sofwares. In 2018, i decided to start learning Cinema4D and i made a daily challenge on my Instagram. This is some examples of my work.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img
            src="https://pierremouchan.com/img/projects/design3d/design3d-aside1.png"
            alt="design3d"
          >
        </div>
        <div>
          <img
            src="https://pierremouchan.com/img/projects/design3d/design3d-aside2.png"
            alt="design3d"
          >
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- posterdesign -->
    <!-- posterdesign -->
    <!-- posterdesign -->
    <div id="design3d" v-else-if="this.$route.path == '/projects/posterdesign'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/posterdesign/posterdesign-bg-header.png"
          alt="posterdesign"
        >

        <div class="h1-container">
          <h1>Design3D</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/lr-logo.png" alt="logo lightroom">
        <img src="https://pierremouchan.com/img/common/ps-logo.png" alt="logo ps">
        <img src="https://pierremouchan.com/img/common/c4d-logo.png" alt="logo c4d">
        <img src="https://pierremouchan.com/img/common/ai-logo.png" alt="logo illustrator">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <img
              src="https://pierremouchan.com/img/projects/posterdesign/posterdesign-main.png"
              alt="posterdesign"
            >
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Designing abstracts posters !</p>
        </parallax>
        <p
          class="section1__desc"
        >During my spare time, i like to express myself and design some abstract posters using my knowledges. For these posters, i decided to mix different technologies and softwares (3D design for models, illustration for some gradients, Lightroom for color correction and Photoshop for the final poster). I'm really satisfied with what i've done so far with these posters.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img
            src="https://pierremouchan.com/img/projects/posterdesign/posterdesign-aside1.png"
            alt="posterdesign"
          >
        </div>
        <div>
          <img
            src="https://pierremouchan.com/img/projects/posterdesign/posterdesign-aside2.png"
            alt="posterdesign"
          >
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- mtw -->
    <!-- mtw -->
    <!-- mtw -->
    <div id="design3d" v-else-if="this.$route.path == '/projects/montrealthisweek'">
      <div class="header-img">
        <img
          src="https://pierremouchan.com/img/projects/mtw/mtw-bg-header.png"
          alt="montreal this week book"
        >

        <div class="h1-container">
          <h1>MontrealTW</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/id-logo.png" alt="logo indesign">
        <img src="https://pierremouchan.com/img/common/ps-logo.png" alt="logo ps">
        <img src="https://pierremouchan.com/img/common/ai-logo.png" alt="logo illustrator">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <img
              src="https://pierremouchan.com/img/projects/mtw/mtw-main.png"
              alt="montreal this week book"
            >
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Made for tourism !</p>
        </parallax>
        <p
          class="section1__desc"
        >During my semester in Canada in 2018, I had the opportunity to design a fictitious magazine related to the tourism in Montréal. I decided to choose the theme of food for this magazine. Making this project make me learn the basics of Indesign and work on something real, not digital.</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img
            src="https://pierremouchan.com/img/projects/mtw/mtw-aside1.png"
            alt="montreal this week bookn"
          >
        </div>
        <div>
          <img
            src="https://pierremouchan.com/img/projects/mtw/mtw-aside2.png"
            alt="montreal this week book"
          >
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
    <!-- jobask -->
    <!-- jobask -->
    <!-- jobask -->
    <div id="design3d" v-else-if="this.$route.path == '/projects/jobask'">
      <div class="header-img">
        <img src="https://pierremouchan.com/img/projects/jobask/jobask-bg-header.png" alt="Jobask">

        <div class="h1-container">
          <h1>Jobask</h1>
        </div>
      </div>
      <div class="triggerHeader"></div>
      <div class="software">
        <img src="https://pierremouchan.com/img/common/xd-logo.png" alt="logo xd">
        <img src="https://pierremouchan.com/img/common/ai-logo.png" alt="logo illustrator">
      </div>
      <div class="project__section1">
        <div class="triggerFooter"></div>
        <div class="section1__main-img">
          <div>
            <img src="https://pierremouchan.com/img/projects/jobask/jobask-main.png" alt="jobask">
          </div>
        </div>
        <parallax :speed-factor="0.15">
          <p class="section1__title">Secret project WIP !</p>
        </parallax>
        <p
          class="section1__desc"
        >Currently developing a (secret..hmm) project to find "jobs" faster. Coming 2020 Maybe...</p>
        <svg id="circle1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
        
        <svg id="circle3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <g style="opacity:0.5">
            <circle cx="250" cy="250" r="250" style></circle>
          </g>
        </svg>
      </div>
      <div class="project__section2">
        <div>
          <img src="https://pierremouchan.com/img/projects/jobask/jobask-aside1.png" alt="jobask">
        </div>
        <div>
          <img src="https://pierremouchan.com/img/projects/jobask/jobask-aside2.png" alt="jobask">
        </div>
      </div>
      <footer>
        <router-link to="/projects">Others projects ?</router-link>
      </footer>
    </div>
  </div>
</template>



<script>
import Parallax from "vue-parallaxy";
export default {
  name: "Project",
  components: {
    Parallax
  },

  data() {
    return {};
  },
  methods: {
    elAppear: function() {
      TweenMax.to(".header-img img", 0.5, {
        y: 0,
        ease: Back.easeOut.config(1.05),
        onComplete: function() {
          TweenMax.to("h1", 0.5, {
            y: 0,
            ease: Back.easeOut.config(1.05)
          });
        }
      });
    }
  },
  mounted() {
    this.elAppear();

    var controller = new ScrollMagic.Controller();
    var containerScene = new ScrollMagic.Scene({
      triggerElement: ".triggerHeader",
      duration: 1000
    })
      .setTween(".header-img img", { scale: 1.3 })
      .addTo(controller);

    var controller2 = new ScrollMagic.Controller();
    var containerScene2 = new ScrollMagic.Scene({
      triggerElement: ".triggerFooter",
      duration: 1500
    })
      .setTween(".project__section2 div img", { scale: 1.1 })
      .addTo(controller2);
  }
};
</script>

<style lang="scss" scoped>
@import "../global";

#project {
  .go-back {
    width: 5vh;
    position: fixed;
    top: 4%;
    right: 10%;
    z-index: 100;
    font-family: $title-font;
    font-size: 1rem;
    transition: 0.25s;
    &:hover {
      transition: 0.25s;
      top: 3%;
    }
    @media #{$mobile} {
      top: 5%;
    }
    svg {
      width: 100%;
      height: 100%;
      transform: rotate(180deg);
      path {
        fill: var(--regular-color);
      }
    }
  }
  .header-img {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    img,
    video {
      position: absolute;
      left: 50%;
      transform: $center translateY(105%);
      @media #{$mobile} {
        position: absolute;

        left: 50%;
        transform: translateX(-50%);
      }
    }
    .h1-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: $center;

      overflow: hidden;
      @media #{$mobile} {
      }
      h1 {
        transform: translateY(105%);
        font-family: $title-font;
        font-size: 15vw;
        color: white;
        text-shadow: 10px 10px 0 hsla(0, 0%, 58.8%, 0.8);
        @media #{$mobile} {
          text-shadow: 5px 5px 0 hsla(0, 0%, 58.8%, 0.8);
        }
      }
    }
  }
}
.triggerHeader {
  position: absolute;
  top: 50vh;
  left: 0;
}
.software {
  display: flex;
  flex-shrink: 0;
  justify-content: space-around;
  height: 7.5vh;
  width: 60vw;
  margin: 105vh auto 0 auto;
  img {
    height: 100%;
  }
}
.project__section1 {
  z-index: 2;
  position: relative;
  margin-top: 5vh;
  height: 100vh;
  width: 100vw;
  .triggerFooter {
    position: absolute;
    bottom: 30%;
    left: 0;
  }
  #circle1 {
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    fill: var(--regular-color);
  }
  #circle2 {
    z-index: -5;
    position: absolute;
    top: 10%;
    right: 5%;
    width: 10%;
    fill: var(--regular-color);
  }
  #circle3 {
    z-index: -5;
    position: absolute;
    bottom: 5%;
    right: 10%;
    width: 20%;
    fill: var(--regular-color);
  }

  .section1__main-img {
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 35%;
    transform: $center;
    width: 60%;
    height: 60%;
    overflow: hidden;
    box-shadow: 0px 0px 79px -34px rgba(0, 0, 0, 0.75);
    @media #{$mobile} {
      width: 90%;
      left: 50%;
    }

    div {
      position: relative;
      width: 100%;
      height: 100%;

      img,
      video {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: $center scale(1.1);
        @media #{$mobile} {
          transform: $center scale(1.1);
        }
      }
    }
  }
  .section1__title {
    position: absolute;
    top: 35%;
    left: 40%;
    font-family: $title-font;
    font-size: 3.5rem;
    @media #{$mobile} {
      font-size: 1.3rem;
      left: 5%;
      top: 10%;
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
    }
  }
  .section1__desc {
    position: absolute;
    top: 40%;
    left: 70%;
    width: 20%;
    font-family: $regular-font;
    font-size: 1.25rem;
    @media #{$mobile} {
      top: 85%;
      left: 5%;
      font-size: 1rem;
      width: 90%;
    }
  }
}

.project__section2 {
  display: flex;
  margin-top: 5%;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  @media #{$mobile} {
    margin-top: 50%;
    flex-direction: column;
  }
  div {
    position: relative;
    width: 50%;
    overflow: hidden;
    @media #{$mobile} {
      width: 100%;
      height: 50vh;
    }
    img,
    video {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: $center;
      @media #{$mobile} {
        transform: $center scale(0.9, 0.9);
      }
    }
  }
}
footer {
  background-color: var(--regular-color);
  height: 20vh;
  width: 100vw;
  position: relative;
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: $center;
    color: black;
    font-family: $title-font;
    font-size: 3rem;
    cursor: pointer;
    @media #{$mobile} {
      font-size: 1.25rem;
      top: 25%;
    }
    &:hover {
      &:before {
        left: 10%;
        transition: 0.5s;
      }
    }
    &:before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 60%;
      left: 1%;
      height: 3vh;
      width: 95%;
      background-color: white;
      transition: 0.5s;
    }
  }
}
h2 {
  font-size: 2rem;
  z-index: 10;
}
</style>
