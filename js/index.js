// suble motion for heading text content
gsap.from(".subtle", {opacity: 0, duration: 5, y: -150, stagger: 0.5})
gsap.from(".vertical", {opacity: 0, duration: 5, y: 300, x: -150})


let preorder = document.querySelector(".animate-btn")



preorder.addEventListener('click', event => {
  gsap.to(".offscreen",{
    duration: 5,
    y: 10,
    opacity: 1,
    scale: 0.8
  }); 

});

// gsap.to(".react",{duration: 2, x: 300, backgroundColor: "black", x: -300} )
gsap.to(".react", { delay: 2, repeat: 2, repeatDelay: 3, duration: 3, ease: "elastic.out(15, 1)", x: 100, });

gsap.from(".react", 8, {rotation:1080*10, scale:5, ease:Linear.easeNone})