const tl = gsap.timeline();

tl.from("header #logo, header nav, header .log-in", {
  y: "-120px",
  opacity: 0.3,
  duration: 1.3,
  stagger: 0.3,
});

tl.from(".leftdata h3, .leftdata h1, .leftdata p", {
  opacity: 0,
  x: "-230px",
  duration: 0.8,
  stagger: 0.4,
});
tl.from(".rightdata img", {
  scale: 0,
  duration: 0.5,
});
tl.from(".leftdata .start-btn", {
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

gsap.from(".partners-company", {
  scale: 0.2,
  opacity: 0,
  duration: 0.7,
  scrollTrigger: {
    trigger: ".partners-company",
    start: "top 93%",
    end: "top 97%",
    // markers: true,
  },
});

gsap.from(".feature", {
  opacity: 0,
  scale: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".feature",
    start: "top 75%",
    end: "top 83%",
  },
});

const features = document.querySelectorAll(".feature");
features.forEach((feature) => {
  feature.addEventListener("mouseenter", () => {
    gsap.to(feature, {
      scale: 1.1,
      power: "easeIn",
    });
  });

  feature.addEventListener("mouseout", () => {
    gsap.to(feature, {
      scale: 1,
      power: "easeIn",
    });
  })
});

gsap.from(".card", {
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".feature",
    start: "top -20%",
    end: "top -12%",
  },
});
