const crsr=document.querySelector("#cursor")
const blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid rgb(119, 2, 125)"
        crsr.style.backgroundColor="rgb(119, 2, 125)"
    })
})


gsap.to("#nav",{
    backgroundColor: "#000",
    height:"80px",
    duration: 1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -50%",
        end:"top -100%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:40,
    opacity:0,
    // stagger: 0.4,
    duration:1.5,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.5,
    opacity:0,
    // stagger: 0.4,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 50%",
        scrub:2
    }
})

gsap.from("#quote1",{
    y:-60,
    x:-60,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:4
    }
})
gsap.from("#quote2",{
    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#quote1",
        scroller:"body",
        start:"top 60%",
        end:"top 70%",
        scrub:4
    }
})
gsap.from("#page4 h1,.elem",{
    y:60,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 80%",
        end:"top 120%",
        scrub:2
    }
})