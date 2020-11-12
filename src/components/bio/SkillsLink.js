import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';


const SkillsLink = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        props.setActiveImage(props.i)
    }
    useEffect( () => {
        console.log('image active changed')
        if(props.imageActive === props.i){
            setIsActive(true);
        }
        else setIsActive(false);
    }, [props.imageActive])

    return (
        <MyP onClick={handleClick} isActive={isActive}>{props.text}</MyP>
    )
}

const MyP = styled.p`
    font-family: Lato, "sans-serif";
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.isActive ? "white" : "#cacaca4d"};
    width: 33.3%;
    text-align: center;
    transform: skewX(30deg);
    cursor: pointer;
    ${media.lessThan('medium')`
        width: 100%;
        height:33%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    `
    }
    
`

export default SkillsLink;