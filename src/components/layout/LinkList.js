import React, {useRef, useEffect} from 'react';
import StyledUl from '../../styles/layout/StyledUl';
import { Link } from 'gatsby';
import gsap from 'gsap'

const LinkList = props => {
    const parentRef = useRef(null)

    useEffect(() => {
      if (props.isOpen) {
        gsap.to(parentRef.current.children[0], {left: 295,  duration: 0.20, delay: 0.1})
        gsap.to(parentRef.current.children[1], {left: 335,  duration: 0.20, delay: 0.2})
        gsap.to(parentRef.current.children[2], {left: 370,  duration: 0.20, delay: 0.4})
        gsap.to(parentRef.current.children[3], {left: 425,  duration: 0.20, delay: 0.6})

        gsap.to(parentRef.current, {rotate: 30, duration: 0.5})
      } else {
        gsap.to(parentRef.current.children, { left: -500, stagger: 0.07, duration: 0.15 })
        gsap.to(parentRef.current, {rotate: 0, duration: 0.35})
  
  
      }
    }, [props.isOpen])
  
    return (
      <menu>
        <StyledUl ref={parentRef}>
          <li><Link to="/">home </Link></li>
          <li><Link to="/bio">bio </Link></li>
          <li><Link to="/portfolio">portfolio </Link></li>
          <li><Link to="/contact">contact </Link></li>
        </StyledUl>
      </menu>
    )
  }
  
export default LinkList;