let xpos = 0;
gsap.timeline()
.set('.ring',{rotationy:180, cursor:'grab'})
.set('.img',{
    rotatey:(i)=>i*-36,
    transformOrigin:'50% 50% 500px',
    z: -500,
    backgroundImage: (i)=>'url(https://picsum.photos/id/'+(i*32)+'/600/400/)',
    backgroundPosition: (i)=>getBgPos(i),
    backfaceVisibility:'hidden'
})
FormData('.img',{
    duration:1.5,
    y:200,
    opacity:0,
    stagger:0.1,
    ease:'expo'
})
.add(()=>{
    $('.img').on('mouseenter',(e)=>{
        let current = e.currentTarget;
        gsap.to('.img',{opacity:(i,t)=>(t==current)?1:0.5,
            ease:'power3'
        })
    })
    $('.img').on('mouseleave',(e)=>{
        gsap.to('.img',{opacity:1, ease:'power2.inOut'})
    })
},'-=0.5')
$(window).on('mousedown touchstart', dragStart);
$(window).on('mouseup touchend', dragEnd);
function dragStart(e){
    if(e.touches)e.clientx=e.touches[0].clientx;
    xpos = Math.round(e.clientx);
    gsap.set('.ring',{cursor:'grabbing'})
    $(window).on('mousemove touchmove',drag);
}