import styled from "styled-components"
import media from "styled-media-query"

const StyledSkillsSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: var(--dark);
  position: relative;
  h1 {
    margin-top: clamp(70px, 10vw, 140px);
    position: absolute;
  }
  .skillsText {
    color: var(--lightGray);
    font-size: 18px;
    font-size: clamp(100%, 1rem + 1.25vw, 18px);
    /* padding-top: clamp(80px, 10vw, 140px); */
    padding-left: clamp(40px,10vw,140px);    
    padding-right: clamp(5px, 1rem + 2vw, 600px);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    span { display: none;}
    ${media.greaterThan("medium")`
      width: 25vw;
    `}
    ${media.between("medium", "1400px")`
      width: 35vw;
    `}
    ${media.lessThan("medium")`
    padding-left: clamp(5px,1rem + 2vw,600px);
    padding-right: clamp(5px,1rem + 2vw,600px);
    top: 0;
    position: static;
    transform: none;
    padding-top: 110vh;
    padding-bottom: 20px;
    background: #3f3b3b;
}
    `}
  }
`

export default StyledSkillsSection
