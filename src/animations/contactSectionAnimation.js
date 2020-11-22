import gsap from "gsap"

export const textAnimation = el => {
  gsap.set(el.current, { scale: 0.01, autoAlpha: 0, overflow: "hidden" })
  gsap.set(el.current.children, { autoAlpha: 0 })
  gsap.set(el.current.children[0], { y: -100 })
  gsap.set(
    [
      el.current.children[1],
      el.current.children[2],
      el.current.children[3],
      el.current.children[4],
    ],
    { y: 40 }
  )
  const tl = gsap.timeline()
  tl.to(el.current, { scale: 1, autoAlpha: 1, duration: 0.45 }, "+.25")
  tl.to(el.current.children[0], { autoAlpha: 1, duration: 0.3 })
  tl.to(el.current.children[0], { y: 0, duration: 0.5 })
  tl.to(el.current.children, {
    y: 0,
    autoAlpha: 1,
    stagger: {
      amount: 1.5,
      each: 0.45,
      from: 1,
      ease: "Power4.in",
    },
  }, "+=0.2")
}
