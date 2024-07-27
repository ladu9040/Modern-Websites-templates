const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink", {
    stagger: .2,
    y:10,
    duration:1,
    ease: Power2,
    opacity:0

});


// gsap.from("#susimagewrapper img", {
//   duration: 2,
//   scale: 1.5,
//   ease: "bounce.out",
//   yoyo: true,
  
//  });


Shery.textAnimate("#headings h1" , {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: .5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
 gsap.from(".anim2", {
    y:30,
    stagger: .3,
    opacity:0,
    ease: Expo,
    duration:1,
  });

Shery.imageEffect("#imgntext img ", {
  style:3,
  config:{"uFrequencyX":{"value":28.24,"range":[0,100]},"uFrequencyY":{"value":29.01,"range":[0,100]},"uFrequencyZ":{"value":12.98,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.79},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500000402394214},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // debug:true,

});

// gsap.from("#imgntext img", {
//   y:13,
//   opacity:0,
//   durationn:2,
//   ease:expo,
// })
Shery.imageEffect(".anim3 img ", {
  style:4,
  config:{"uFrequencyX":{"value":28.24,"range":[0,100]},"uFrequencyY":{"value":29.01,"range":[0,100]},"uFrequencyZ":{"value":12.98,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.79},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7500000402394214},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.76,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
  // debug:true,

});

Shery.imageEffect("#bimg", {
  style:6,
  gooey:true,
  config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.41,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.3164905120656052},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":7.2,"range":[1,15]},"durationOut":{"value":1.63,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":31}},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":16.79,"range":[0,100]}},
  // debug:true
});

document.querySelector("#ftext button").addEventListener("mouseover", function(){
gsap.to("#future video", {
  opacity:1,
  duration:1,
  ease:Power4
})
})
document.querySelector("#ftext button").addEventListener("mouseleave", function(){
  gsap.to("#future video", {
    opacity:0,
    duration:1,
    ease:Power4
  })
})

  