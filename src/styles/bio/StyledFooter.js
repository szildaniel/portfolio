import styled from "styled-components"
import media from "styled-media-query"
import bgFooterMobile from "../../images/bgFooterMobile.svg"
import bgFooterDesktop from "../../images/bgFooterDesktop.svg"

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  div {
    width: 100vw;
    height: 84px;
  }
  .footerBottomDiv {
    background: #b9b8b8;
  }

  .footerTopDiv {
    width: 100vw;
    height: 84px;
    background: url(${bgFooterMobile});
    position: absolute;
    top: -83px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;
    ${media.greaterThan("medium")`
    background: url(${bgFooterDesktop});
    `}
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    padding-left: 30px;
  }
  .footerGhIcon {
    padding-left: 75px;
  }
  p {
    position: absolute;
    right: 0;
    width: 50vw;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 30px;
    text-align: right;
  }
  ${media.greaterThan("medium")`
    margin-top: 300px;

    .footerTopDiv {
        height: 217px;
        top: -216px;
    }
    svg{
        padding-left: 100px;
        width: 40px;
        height: 40px;
    }
    .footerGhIcon{
        padding-left: 175px;
    }
    p{
        padding-right: 100px;
        font-size: 18px;
    }
  `}
  ${media.greaterThan("huge")`
    .footerTopDiv{
        background-repeat: no-repeat;
        background-position-x: left;
    }
  `}
`

export { StyledFooter }
