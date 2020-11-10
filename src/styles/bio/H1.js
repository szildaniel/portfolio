import styled from 'styled-components';
import media from 'styled-media-query';
import Undercover from '../../images/bio/Undercover.svg';

export const H1 = styled.h1`
    font-size: clamp(40px,1rem + 2vw,75px);
    font-weight: bold;
    color: black;
    margin: clamp(40px, 10vw, 140px);
    margin-top: clamp(70px, 10vw, 140px);
    position: relative;
    z-index: 1;
    &:after{
        content: url(${Undercover});
        display: inline-block;
        position: absolute;
        z-index: -1;
        left: 0;
        top: 13px;
    }
    &:before{
        font-size: clamp(117px , 15vw, 237px);
        color: var(--bgBlue);
        content: ${props => props.bgText || "Beginning"};
        display: inline-block;
        position: absolute;
        z-index: -2;
        /* left: clamp(9px, 1rem + 2vw, 330px); */
        /* top: clamp(5px,1rem + 2vw,35px); */
        ${media.between("320px", "medium")`
            bottom: -60px;
            left: -30px;
        `}
        ${media.between("medium", "4050px")`
            bottom: -92px;
            left: -50px;
        `}
    }
`