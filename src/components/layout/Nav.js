import React, { useEffect, useRef } from "react"
import StyledNav from "../../styles/layout/StyledNav"
import LinkList from './LinkList';

import Img from "gatsby-image"
import { useMenuPhotoQuery } from "../../helpers/hooks/useMenuPhotoQuery"
import { pageRotation, animateMenu, setMenuSVGPosition } from "../../animations/menuAnimation"

const Nav = props => {
  const data = useMenuPhotoQuery()
  const svgContainerRef = useRef(null);

  useEffect( () => {
    setMenuSVGPosition(svgContainerRef);
  }, [])


  useEffect(() => {
    pageRotation(props.mainRef.current, props.isOpen)
    animateMenu(props.layoutRef.current.children[1], props.isOpen)
  }, [props.isOpen])


  return (
      
      <StyledNav>
        <div className="menuItems">
          <LinkList isOpen={props.isOpen}/>
        </div>
        <div className="svgContainer" ref={svgContainerRef}>
          <Img fluid={data.file.childImageSharp.fluid} alt="blue wave" />
        </div>
      </StyledNav>
    
  )
}

export default Nav
