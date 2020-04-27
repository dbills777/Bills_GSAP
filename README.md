# Introduction to GSAP

Link to Website [BillsGSAPintro](https://bills2780gsap.netlify.app/)<br><br>

https://bills2780gsap.netlify.app/

### First Animation (onload)

```
window.addEventListener("load", () => {
  gsap.from(".subtle", { opacity: 0, duration: 5, y: -150, stagger: 0.5 });
  gsap.from(".vertical", { opacity: 0, duration: 5, y: 300, x: -150 });
});
```

<sup>1: Heading and Button move down as page loads</sup> <br>
<sup>2: Explore text moves up as page loads</sup>

### Second Animation (click)

```
preorder.addEventListener("click", () => {
  gsap.to(".offscreen", {
    duration: 2,
    opacity: 1,
    scale: 0.8,
  });
});
})
```

<sup>2: Displays a thank you message that appears onclick</sup>
<br><br>

### Third Animation (mouseover)

```
hover.addEventListener("mouseover", () => {
  gsap.from(".react", 2, {
    rotation: 1080 * 10,
    scale: 15,
    ease: Linear.easeNone,
  });
});
```

<sup>3: Logo quickly scales large then spins as it returns to size</sup>
