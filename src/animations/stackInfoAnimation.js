import gsap from 'gsap';
import { random } from 'gsap/gsap-core';

const slideText = (el) => {
    const tl = gsap.timeline();
    tl.from(el.current.children[0], {x: -300, duration: 0.4, ease: "expo.out"})
    tl.from(el.current.children[1], {y: 600, duration: 0.3, ease: "power4.out"}, )
} 



export { slideText };
