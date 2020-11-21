import styled from "styled-components"
import media from "styled-media-query"

const StyledContacText = styled.div`
  background: rgb(185 184 184 / 0.4);
  border-radius: 5px;
  border: 2px solid gray;
  /* width: 300px; */
  width: 100%;
  box-sizing: border-box;
  padding: 20px 10px;

  .subheading {
    color: var(--lightGray);
    display: inline-block;
    padding-bottom: 10px;
    font-size: clamp(19px, 1rem + 1vw, 22px);
  }
  p {
    font-size: clamp(100%, 1rem + 2vw, 18px);
    color: var(--lightGray);
    padding-bottom: 15px;
  }
  .email {
    font-size: clamp(100%, 1rem + 2vw, 18px);
    font-style: italic;
    display: flex;
    align-items: center;
    color: var(--lightGray);
    & svg {
      width: 30px;
      height: 30px;
      padding-right: 10px;
    }
  }

  ${media.greaterThan("medium")`
  width: 30vw;
  `}
`

export default StyledContacText
