// suble motion for heading text content
gsap.from(".subtle", {opacity: 0, duration: 5, y: -150, stagger: 0.5})
gsap.from(".vertical", {opacity: 0, duration: 5, y: 300, x: -150})


let preorder = document.querySelector(".animate-btn")


// https://developer.mozilla.org/en-US/docs/Web/Events

preorder.addEventListener('click', event => {
  console.log('is it workin');
  gsap.to(".offscreen",{
    duration: 5,
    y: 10,
    opacity: 1,
    scale: 0.8
  }); 

});



