import styled from 'styled-components';
import media from 'styled-media-query';

const StyledBeginnningSection = styled.section`
    padding-top: clamp(15px,5vw,140px);
    background-color: white;
    .onlyMobileParagraph {
        padding: 60px 20px;
        padding-top: 30px;
        padding-right: 80px;
        font-size: clamp(100%,1rem + 2vw,18px);
        display: none;
        background: #606366;
        color: var(--lightGray);
        ${media.lessThan("medium")`
            display: block;
        `}
    }
`

export default StyledBeginnningSection;