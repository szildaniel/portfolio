import styled from "styled-components"
import media from "styled-media-query"

const StyledContacText = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  border: 2px solid rgb(128 128 128 / 0.2);
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
  height: 45vh;
  border: 4px solid rgb(128 128 128 / 0.2);
  display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`

export default StyledContacText
