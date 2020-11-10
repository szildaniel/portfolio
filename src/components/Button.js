import styled from 'styled-components';
import media from 'styled-media-query';

const Button = styled.button`
    font-weight: 500;
    font-family: Roboto, sans-serif;
    font-size: 16px;    
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: white;
    box-sizing: border-box;
    background:${props => props.primary ? "var(--btnBlue)" : "var(--salmon)"};
    border: 1px solid ${props => props.primary ? "var(--btnBlue)" : "var(--salmon)"};
    margin: clamp(40px,10vw,140px) 0;
    margin-left: clamp(5px, 1rem + 2vw,600px);
    margin-right: clamp(5px, 1rem + 2vw,600px);
    border-radius: 5%;
    transition: background 250ms ease-in-out,
                transform 150ms ease;

   

    width: 140px;
    height: 40px;

    &:hover, &:focus {
        background: #498fd0;
    }

    &:focus{
        outline: 1px solid #fff;
        outline-offset: -4px;
    }
    &:active{
        transform: scale(0.99);
    }
    ${media.greaterThan("medium")`
        font-size: 17px;
        width: 180px;
        height:48px;
        margin-left: clamp(40px,10vw,600px);
    `}

 a{
     width: 100%;
     height: 100%;
    color: white;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    &:focus{
        outline-offset: 0;
    }
 }
`

export default Button;