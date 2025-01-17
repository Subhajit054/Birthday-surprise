// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  // Timeline for scroll animations
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper", // Element to trigger the animations
      start: "top top", // Start at the top of the viewport
      end: "+=150%", // End point for scrolling
      pin: true, // Pin the element during the animation
      scrub: true, // Smooth scroll animations
      markers: true, // Debugging markers (optional, remove for production)
    },
  });

  // Scale animation for the hero section
  tl.to(".section.hero", {
    scale: 1.2,
    z: 350,
    transformOrigin: "center center",
    ease: "power1.inOut",
  });
});
