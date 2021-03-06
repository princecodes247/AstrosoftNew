const setupFeaturesEffect = () => {
  // Spin circle on mousemove
let mainTarget = document.querySelector(".features__texts");
let invTargets = document.querySelectorAll(".features__texts");
let featuresSect = document.querySelector(".features_sect");
featuresSect.addEventListener("mousemove", (evt) => {
  // console.log(evt)
  let rot =
    (Math.floor((evt.clientY / window.innerHeight) * 40 - 20) +
      Math.floor((evt.clientX / window.innerWidth) * 40 - 20)) /
    2;

  mainTarget.style.setProperty("--rotate", `${rot}deg`);
  invTargets.forEach((target) =>
    target.style.setProperty("--rotate-inv", `${rot * -1}deg`)
  );
  // console.log("yoo", invTarget.getPropertyValue('--rotate-inv'))
});

// Revert circle to original position on mouseleave
featuresSect.addEventListener("mouseleave", () => {
    mainTarget.style.setProperty("--rotate", "0deg");
    invTargets.forEach((target) =>
        target.style.setProperty("--rotate-inv", "0deg")
    );
    });
}

try {
  setupFeaturesEffect()
} catch (error) {
  console.log(error);
  
}