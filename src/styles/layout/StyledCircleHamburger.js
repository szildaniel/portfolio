import styled from 'styled-components';

const StyledCircleHamburger = styled.div`
width: 120px;
height: 120px;
background: var(--salmon);
border-radius: 50%;
position: absolute;
top: -60px;
right: -60px;
.iconContainer{
    width: 40px;
    height: 40px;
    background-color: transparent;

    position: absolute;
    bottom: 15px;
    right: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
}
`

export default StyledCircleHamburger;