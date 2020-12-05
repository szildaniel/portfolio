import gsap from "gsap"

export const setNavFixedPosition = el => {
  gsap.set(el, { position: "fixed", left: -790, top: 0 })
}

export const setHamburgerPosition = el => {
  gsap.set(el.current, { x: -60, y: -60 })
  gsap.set(el.current.children[0], { x: -15, y: -15 })
}

export const setMenuItemsPosition = menuRef => {
  gsap.set(menuRef, { rotate: 30, x: 140, duration: 0.01 })
}
export const setSubMenuHidden = subMenuRef => {
  gsap.set(subMenuRef, { autoAlpha: 0 })
}

export const setLiItemsPosition = liItemsRef => {
  gsap.set(liItemsRef, { x: -300 })
}

export const pageRotation = (layOutRef, isOpen) => {
  if (isOpen) {
    gsap.to(layOutRef, { rotate: -30, duration: 0.7 })
  } else {
    gsap.to(layOutRef, { rotate: 0, duration: 0.5 })
  }
}

export const animateMenu = (menuRef, isOpen) => {
  const tl = gsap.timeline()

  if (isOpen) {
    tl.to(menuRef, { zIndex: 100, duration: 0.01 })
    tl.to(menuRef, { left: -650, duration: 0.4 })
    tl.to(menuRef, { rotate: -30, duration: 0.7 }, "=-0.4")
  } else {
    tl.to(menuRef, { left: -790, duration: 0.2 })
    tl.to(menuRef, { rotate: 0, duration: 0.5 }, "=-0.2")
    tl.to(menuRef, { zIndex: -100, duration: 0.01 })

  }
}

export const slideMenuItems = (liItemsRef, isOpen) => {
  const myTl = gsap.timeline()
  if (isOpen) {
    myTl.to(liItemsRef, { x: 0, stagger: 0.25, delay: 0.26, duration: 0.3 })
  } else {
    myTl.to(liItemsRef, { x: -300, stagger: 0.02, duration: 0.2 })
  }
}

export const setMenuSVGPosition = svgContainer => {
  gsap.set(svgContainer.current, { x: -1, y: 300 })
}

export const handleSubMenu = (subMenuIsOpen, subMenuRef, ulRef, arrowRef) => {
  const tl = gsap.timeline();
  
  if(!subMenuIsOpen){
    tl.to(arrowRef.current.children[0], {rotation: 179, duration: 0.2})
    tl.to([ulRef.current.children[2], ulRef.current.children[3]], {y: 130, stagger: 0.075}, "-=0.2")
    tl.to(subMenuRef, {autoAlpha: 1, stagger: 0.1}, "-=.5")

  }
  else {
    tl.to(arrowRef.current.children[0], {rotation: 0, duration: 0.3})
    tl.to(subMenuRef, {autoAlpha: 0, duration: 0.1}, "-=0.1")
    tl.to([ulRef.current.children[2], ulRef.current.children[3]], {y: 0, stagger: 0.08})

  }
}
