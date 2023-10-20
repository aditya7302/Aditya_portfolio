function init () {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

init();

    let tl1 = gsap.timeline();

    tl1.from(".navbar", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
      })
        .to(".up", {
          y: "0",
          ease: Expo.easeInOut,
          duration: 2,
          delay: -1,
          stagger: 0.2,
        })
        .to(".down",{
            y: "0",
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
        })
        .from(".other", {
          y: -10,
          opacity: 0,
          duration: 1.5,
          delay: -1,
          ease: Expo.easeInOut,
        });

let tl2 = gsap.timeline({
  scrollTrigger:{
    scroller: ".main",
    start: "top -80%",
    end: "top 120%",
    scrub: 3
  }
})
tl2.to("#about",{
  backgroundColor: "#fff",
  color: "#000"
},"text")
tl2.to(".hi h1",{
  color: "#000"
},"text")
tl2.to(".about-me h3",{
  color: "#000"
},"text")
tl2.to(".about-me p",{
  color: "#000"
},"text")
// tl2.to(".circle" ,{
//   backgroundColor: "#000"
// })


let tl3=gsap.timeline({
  scrollTrigger:{
    scroller: "#ecommerce h1",
    scroller: ".main",
    start: "top -25%",
    end: "top 0%",
    scrub: 3,
  }
})
tl3.to(".description img",{
  width: "90%",
})

let tl4= gsap.timeline({
  scrollTrigger: {
    scroller: "#ecommerce .deploy",
    scroller: ".main",
    start: "top -80%",
    end: "top -700%",
    scrub: 3,
  }
})
tl4.to(".fade",{
  opacity: 1,
  duration: 1,
  ease: Expo.easeInOut,
})
tl4.to(".fade-late",{
  opacity: 1,
  duration: 1,
  ease: Expo.easeInOut,
})
.to(".description-late img",{
  width: "90%",
})
.to(".fade-late-1",{
  opacity: 1,
  duration: 1,
  ease: Expo.easeInOut,
})
.to(".fade-late-2",{
  opacity: 1,
  duration: 1,
  ease: Expo.easeInOut,
})
.to(".description-late-1 img",{
  width: "90%",
})
.to(".fade-late-3",{
  opacity: 1,
  duration: 1,
  ease: Expo.easeInOut,
})
.to(".fade-late-4",{
  opacity: 1,
  duration: 1,
  ease: Expo.easeInOut,
})



// let tl5=gsap.timeline({
//   scrollTrigger:{
//     scroller: "#coinstock h1",
//     scroller: ".main",
//     start: "top -200%",
//     end: "top 175%",
//     scrub: 3,
//   }
// })
// tl5.to(".description img",{
//   width: "90%",
// })

// let tl5= gsap.timeline({
//   scrollTrigger: {
//     scroller: "#ecommerce .deploy",
//     scroller: ".main",
//     start: "top -150%",
//     end: "top -210%",
//     scrub: 3,
//   }
// })
// tl5.to(".fade",{
//   opacity: 1,
//   duration: 2,
//   ease: Expo.easeInOut,
// })
// tl5.to(".fade-late",{
//   opacity: 1,
//   duration: 2,
//   ease: Expo.easeInOut,
// })



function circleMouseOver() {
    window.addEventListener("mousemove",function(dets) {
        document.querySelector(".circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })}

circleMouseOver();


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  let circle = document.querySelector(".circle");

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });

    circle.style.height = '10px';
    circle.style.width = '10px';
    circle.innerHTML = '';
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

    circle.style.height = '50px';
    circle.style.width = '50px';
    circle.innerHTML = '<p>view</p>';

    elem.addEventListener("click" , function(dets){
      const elemChild = elem.children[0];
      const url = elemChild.getAttribute("alt");
      window.location.href = `${url}`;
    })

    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});





