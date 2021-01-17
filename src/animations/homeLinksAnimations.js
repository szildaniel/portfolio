import gsap from 'gsap';

const setLinksBgInvisible = (el) => {
    gsap.set(el, {autoAlpha: 0, width: 20})
}

const showLinkBg = (el, calculatedWidth) => {
    const tl = gsap.timeline();
      tl.to(el, { autoAlpha: 1, duration: 0.3 });
      tl.to(el, { width: calculatedWidth, duration: 0.4 }, "+0.15");
}

 const hideLinkBg = (el) => {
    const tl = gsap.timeline();
    tl.to(el, { width: 20, duration: 0.15 });
    tl.to(el, { autoAlpha: 0, duration: 0.2 }, "+0.15");
  }

  export {setLinksBgInvisible, showLinkBg, hideLinkBg};