gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: true,
      markers: true,
    },
  }).to(".section.hero", { scale: 1.2, ease: "power1.inOut" });
});
