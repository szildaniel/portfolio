import gsap from "gsap"

export const subHeadingAnimation = (el) => {
  gsap.set(el, {backgroundSize: "0 5px"})
  gsap.to(el, {backgroundSize: "99% 5px", duration: 1.3, ease: "bounce.out", delay: 1.2})
}