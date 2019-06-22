// NOT LOADED

if (window.location.protocol !== "https:") {
  window.location.href = "https://pierremouchan.com";
}

// LOADED
$(document).ready(function() {
  var urlsPrimary = [
    "https://pierremouchan.com/img/about/pierre_mouchan.png",
    "https://pierremouchan.com/img/projects/clishare/clishare-bg-header.png",
    "https://pierremouchan.com/img/projects/design3d/design3d-bg-header.png",
    "https://pierremouchan.com/img/projects/jobask/jobask-bg-header.png",
    "https://pierremouchan.com/img/projects/junglematch/junglematch-bg-header.png",
    "https://pierremouchan.com/img/projects/mtw/mtw-bg-header.png",
    "https://pierremouchan.com/img/projects/portfolios/portfolios-bg-header.png",
    "https://pierremouchan.com/img/projects/posterdesign/posterdesign-bg-header.png",
    "https://pierremouchan.com/img/projects/spacegame/spacegame-bg-header.png"
  ];

  var loadedResources = 0;
  var deferreds = [];

  $.each(urlsPrimary, function(index, res) {
    var load = $.ajax({
      type: "GET",
      url: res
    }).then(function() {
      loadedResources += 1;
      document.querySelector(".loading__wrapper__container").style.width =
        Math.floor((loadedResources / urlsPrimary.length) * 100) + "%";
    });
    deferreds.push(load);
  });

  $.when.apply(this, deferreds).then(function() {
    setTimeout(() => {
      TweenMax.to(".loader", 0.5, { opacity: 0 });
      TweenMax.to(".loading__wrapper", 0.5, {
        scale: 0.5,
        y: "5%",
        ease: Back.easeIn.config(2),
        onComplete: function() {
          TweenMax.to(".loading__wrapper", 0.25, {
            scale: 20,
            ease: Expo.easeIn,
            onComplete: () => {
              TweenMax.to("#loading", 0.5, {
                opacity: 0,
                ease: Expo.easeIn,
                onComplete: () => {
                  document.querySelector("#loading").style.visibility =
                    "hidden";
                }
              });
              document.querySelector("body").style.overflow = "auto";
              document.querySelector("body").style.margin = 0;
            }
          });
        }
      });
    }, 100);
  });
});
