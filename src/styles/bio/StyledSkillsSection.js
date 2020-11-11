import styled from 'styled-components';
import media from 'styled-media-query';

const StyledSkillsSection = styled.section`
    width: 100vw;
    height: 100vh;
    background: var(--dark);
    

    h1{
        margin-top: clamp(70px,10vw,140px);
        position: absolute;
    }
`

export default StyledSkillsSection;