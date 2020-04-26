// subtle motion for heading text content (Starts when page loads)
window.addEventListener('load', () => {
  //heading and button move down as page loads
  gsap.from('.subtle', { opacity: 0, duration: 5, y: -150, stagger: 0.5 });
  gsap.from('.vertical', { opacity: 0, duration: 5, y: 300, x: -150 });
  //explore text moves up as page loads
});

//PreOrder Button Gsap Event (Thank you message)
let preorder = document.querySelector('.animate-btn');
preorder.addEventListener('click', () => {
  gsap.to('.offscreen', {
    duration: 2,
    opacity: 1,
    scale: 0.8,
  });
});
//PreOrder button Gsap

//React symbol movement. (to explore the way the different items act in gsap)
let hover = document.querySelector('.spin');
hover.addEventListener('mouseover', () => {
  gsap.from('.react', 2, {
    rotation: 1080 * 10,
    scale: 15,
    ease: Linear.easeNone,
  });
});
