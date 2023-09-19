var active = 3;

var mncircles = document.querySelectorAll('.mncircle');
var sec = document.querySelectorAll('.sec');
gsap.to(mncircles[active-1],{
opacity:1
});

gsap.to(".circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2.5,
});

gsap.to(sec[active-1],{
  opacity:1
})

mncircles.forEach(function(val,index){
  val.addEventListener('click',function(){
    // alert('happenening')
    gsap.to('.circle',{
      
      rotate: (3-(index+1))*10
    })
    greyout();
    gsap.to(this,{
      opacity:1
    }),
    gsap.to(sec[index],{
      opacity:1
    })
  })
})
function greyout(){
  gsap.to(mncircles,{
    opacity:.2
  }),
  gsap.to(sec,{
    opacity:.5
  })
}