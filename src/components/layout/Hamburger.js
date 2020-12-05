import React, { useEffect, useRef} from 'react';
import StyledHamburger from '../../styles/layout/StyledHamburger';
import hamburgerIcon from '../../images/layout/hamburgerIcon.svg'
import closeIcon from '../../images/layout/closeIcon.svg'
import {setHamburgerPosition} from '../../animations/menuAnimation';

const Hamburger = props => {
    const hamburgerRef = useRef(null);

    useEffect( () => {
        setHamburgerPosition(hamburgerRef);
    }, [])

    return (
        <StyledHamburger ref={hamburgerRef} onClick={props.handleClick}>
            <div className="iconsContainer">
                <img src={props.isOpen ? closeIcon : hamburgerIcon} alt="menu" />
            </div>

        </StyledHamburger>
    )
}

export default Hamburger;