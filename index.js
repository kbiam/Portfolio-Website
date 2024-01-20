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
  .to(".india1",{opacity:1,y:27,duration:1.7,ease:Expo.easeInOut,delay:-1.5})
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

            left:dets.x-6,
            top:dets.y-5
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
  