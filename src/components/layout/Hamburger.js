import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import hamburgerIcon from '../../images/layout/hamburgerIcon.svg'
import closeIcon from '../../images/layout/closeIcon.svg'
import StyledCircleHamburger from '../../styles/layout/StyledCircleHamburger';

const Hamburger = (props) => {
    const iconRef = useRef(null);
    useEffect( () => {
        if(props.isOpen) {
            gsap.to(iconRef.current, {rotate: 30, x:-15, y: 10, duration: 0.3})
        }
        else { 
            gsap.to(iconRef.current, {rotate: 0, x:0, y: 0, duration: 0.3})
        }
    }, [props.isOpen])
    return (
        <StyledCircleHamburger>
            <div className="div" ref={iconRef}>
                <img src={props.isOpen ? closeIcon : hamburgerIcon} alt="menu" />
            </div>
        </StyledCircleHamburger>
    )
}

export default Hamburger;