// gsap.registerPlugin(ScrollTrigger);
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[.main2]'),
//   smooth: true
// });
var t1 = gsap.timeline();

t1.from(".maindiv h1", {
  onStart: function () {
    $('.maindiv h1').textillate({
      in: {
        effect: 'bounceIn',
        // sync:true,
        callback: function () {
          // Callback function for 'in' animation
          // You might want to do something here
          $('.maindiv h1').textillate('out');
        }
      },
      out: {
        effect: 'bounceOut',
        reverse:true,
        callback: function () {
          // Callback function for 'out' animation
          // You might want to do something here
        }
      }
    });
  }
})


  .to(".maindiv h1",{display:"none",delay:2.65})
  .to(".main",{ yPercent:-100,ease:"power1.out",duration:0.7,delay:-0.3})
  .set(".main",{display: "none"})
  .set("body",{overflowY :"scroll"})
  .fromTo(".nav p", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 2, ease: Expo.easeInOut,delay:-0.5})
  .to(".h", { y: 0, duration: 2, ease: Expo.easeInOut,delay:-2})
  .to(".india1",{opacity:1,y:27,duration:0.45,ease:Expo.ease,delay:-1})
  .to(".footernav p, .scrollbutton",{opacity:1,duration:1,ease:Expo.easeInOut,delay:-1})
  .to(".anifooter p",{ y: 0, duration: 2.5, ease: Expo.easeInOut,delay:-2,stagger:0.3});

  


  

function hover(){
    var cursor  = document.querySelector(".cursor");
    window.addEventListener("mouseover",function(){
      gsap.to(cursor,{
        scale:1
        
      })
    })
    window.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
          display:"block",
          x:dets.clientX-6,
          y:dets.clientY-5

            // left:dets.x-6,
            // top:dets.y-5
        })
    })
    window.addEventListener("mouseout",function(){
      gsap.to(cursor,{
        scale:0
      })
    })
}
hover();

  function scroll(){
    var scrollbutton = document.querySelector(".scrollbutton");
    var cursor1 = document.querySelector(".cursor");
    var scrollbuttonimg = document.getElementById("scrollbutton")
    scrollbutton.addEventListener("click",function(){
      window.scrollTo({
      top: window.innerHeight, // Scroll to the top of the page
      left: 0,
      behavior: 'smooth'
      });
    })
    scrollbutton.addEventListener("mouseenter",function(){
    gsap.to(cursor1,{
      visibility:"hidden"
    });
    var t2 = gsap.timeline();
    t2.fromTo(scrollbuttonimg,{y:1},{y:20,duration:0.25})
      .from(scrollbuttonimg,{y:-20,duration:0.25});
    
  });
    scrollbutton.addEventListener("mouseleave",function(){
      gsap.to(cursor1,{
        visibility:"visible"
    });
  })
  

  }

scroll();

function sociallinks() {
  var igdiv = document.querySelector(".Instagram");
  var gitdiv = document.querySelector(".Github");
  
  var movingtext = document.querySelector(".Instagram .moving-text");
  var movingtextgit = document.querySelector(".Github .moving-text");
  var social = document.querySelector(".Instagram h2");
  var gitsocial = document.querySelector(".Github h2");
  igdiv.addEventListener("click",function(){
    window.location.href = "https://www.instagram.com/kusssshhh/";
  });

  igdiv.addEventListener("mouseenter", function () {
    social.style.opacity="0";
    gsap.to(igdiv, {
      backgroundColor: "white",
      duration: 0.3,
    });
    movingtext.style.opacity = "1";
  });

  igdiv.addEventListener("mouseleave", function () {
    gsap.to(igdiv, {
      backgroundColor: "black",
      duration: 0.3,
      onComplete: function () {
        igdiv.style.backgroundColor = "black"; // Ensure the final color is set
      }
    });
    movingtext.style.opacity = "0";
    social.style.opacity = "1";
  });

  gitdiv.addEventListener("click",function(){
    window.location.href = "https://github.com/kbiam";
  });

  gitdiv.addEventListener("mouseenter", function () {
    gitsocial.style.opacity="0";
    gsap.to(gitdiv, {
      backgroundColor: "white",
      duration: 0.3,
    });
    movingtextgit.style.opacity = "1";
  });

  gitdiv.addEventListener("mouseleave", function () {
    gsap.to(gitdiv, {
      backgroundColor: "black",
      duration: 0.3,
      onComplete: function () {
        gitdiv.style.backgroundColor = "black"; // Ensure the final color is set
      }
    });
    movingtextgit.style.opacity = "0";
    gitsocial.style.opacity = "1";
  });

  
}

sociallinks();

// function scrolltrigger() {
//   gsap.from("#social", {
//     opacity: 0,
//     yPercent: 100, // Move up from the bottom by 100% of its own height
//     duration: 0.3,
//     ease: "power2.out", // Adjust the easing function as needed
//     scrollTrigger: {
//       trigger: "#social",
//       start: "bottom bottom", // Start the animation when the bottom of the trigger hits the bottom of the viewport
//       end: "bottom center",   // End the animation when the bottom of the trigger hits the center of the viewport
//       scrub: 1, 
//       once: true,              // Smooth scrubbing effect
//     }
//   });
// }

// scrolltrigger();