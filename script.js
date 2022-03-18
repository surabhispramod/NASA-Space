const tl2=gsap.timeline({
    scrollTrigger: {
      trigger:"#content",
      start:"top center",
      toggleActions:"play pause resume reverse"
    }
  });
  tl2.from('.block',{
    stragger: .3,
    opacity: 0,
    delay: .1,
    duration: 1,
  })
  .from('.block.img', {
    stagger: .4,
    opacity: 0,
    duration: 1.5,
  })
  .from('footer p',{
    y: 10,
    opacity: 0,
    duration: 3,
  })