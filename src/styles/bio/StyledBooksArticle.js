import styled from 'styled-components'
import media from 'styled-media-query';

const StyledBooksArticle = styled.section`
    opacity: 1;
    padding-top: 40px;
    padding: 60px 20px;
    padding-right: 80px;
    font-size: clamp(100%,1rem + 2vw,18px);
    ${media.greaterThan("medium")`
            padding: 120px 0;
        `}
    h2{
        color: white;
        opacity: 1;
        font-size: clamp(19px,1rem + 1vw,22px);
        padding-bottom: 20px;
        ${media.greaterThan("medium")`
            padding-left: clamp(40px,10vw,600px);
            width: 35%;
        `}
    }
    p{
        color: var(--lightGray);
        &:nth-of-type(2){
            padding-top: 20px;
        }
        ${media.greaterThan("medium")`
            padding-left: clamp(40px,10vw,600px);
            width: 35%;
        `}
    }
`

export default StyledBooksArticle;