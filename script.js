const tl = gsap.timeline();

tl.from("header #logo, header nav, header .log-in", {
    y: "-120px",
    opacity: 0.3,
    duration: 2,
    stagger: 0.3
})

tl.from(".leftdata h3, .leftdata h1, .leftdata p", {
    opacity: 0,
    x: "-230px",
    duration: 1,
    stagger: 0.4,
})
tl.from(".rightdata img", {
    scale: 0,
    duration: 0.8,
})
tl.from(".leftdata .start-btn", {
    opacity: 0,
    duration: 0.3,
    stagger: 0.2
})