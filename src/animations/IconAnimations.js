import gsap, {random} from 'gsap';

const hideIcon = (el) => {
    gsap.to(el, { autoAlpha: 0, x: 0, y: 0, duration: 0.3 })
  }
const showIcon = (el) => {
    gsap.to(el, { autoAlpha: 1, x: 20, y: -30, duration: 0.9 })
  }

const setPosition = (el) => {
  gsap.set(el, {transform: "rotateX(-45deg) rotateZ(-45deg)"})
}

const setPositionAndScale = (el) => {
  gsap.set(el, {transform: "rotateX(-45deg) rotateZ(-45deg) scale(1.025)"})
}


const mouseEnterAnimation = (el) => {
  const tl = gsap.timeline();
  tl.to(el, {filter: "grayscale(0.3)", duration: 0.8, ease:"elastic"})
}

const mouseLeaveAnimation = (el) => {
  gsap.killTweensOf(el);
  const tl = gsap.timeline();
  tl.to(el, {filter: "grayscale(0.9)", duration: 0.4, ease:"power4.out"})
}
  export { 
    hideIcon, 
    showIcon, 
    setPosition, 
    setPositionAndScale, 
    mouseEnterAnimation, 
    mouseLeaveAnimation };