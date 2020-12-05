import React, { useRef, useEffect, useState } from "react"
import StyledUl from "../../styles/layout/StyledUl"
import { Link } from "gatsby"
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import {setLiItemsPosition, handleSubMenu, setSubMenuHidden, setMenuItemsPosition, slideMenuItems} from '../../animations/menuAnimation';

import { Icon } from "@iconify/react"
import homeFilled from "@iconify-icons/ant-design/home-filled"
import bxsUser from "@iconify-icons/bx/bxs-user"
import portfolioIcon from "@iconify-icons/dashicons/portfolio"
import envelopeIcon from "@iconify-icons/el/envelope"
import baselineArrowDropDown from "@iconify-icons/ic/baseline-arrow-drop-down"

const LinkList = props => {
  const parentRef = useRef(null)
  const arrowRef = useRef(null)
  const subMenuRef = useRef(null)

  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false)

  useEffect( ()=> {
    setMenuItemsPosition(parentRef.current)
    setSubMenuHidden(subMenuRef.current.children)
    setLiItemsPosition(parentRef.current.children);
  }, [])

  useEffect( () => {
    slideMenuItems(parentRef.current.children, props.isOpen)
  }, [props.isOpen])

  const handleSubMenuClick = () => {
    handleSubMenu(subMenuIsOpen, subMenuRef.current.children, parentRef, arrowRef)
    setSubMenuIsOpen(subMenuIsOpen => !subMenuIsOpen)
  }

  return (
    <menu>
      <StyledUl ref={parentRef}>
        <li>
          <Link to="/" activeStyle={{ color: "#e8e8e8" }} >
            home <Icon icon={homeFilled} />
          </Link>
        </li>
        <li ref={arrowRef}>
          <Icon
            icon={baselineArrowDropDown}
            color="#e8e8e8"
            className="arrowDown"
            onClick={handleSubMenuClick}
          />
          <Link to="/bio/" activeStyle={{ color: "#e8e8e8" }} isPartiallyCurrent={true}>
            bio
            <Icon icon={bxsUser} />
          </Link>
          <div className="bioSubMenu" ref={subMenuRef}>
            <AnchorLink to="/bio/#beginning">beginning</AnchorLink>
            {/* <Link to="/bio/">beginning</Link> */} 

            {/* <Link to="/">course</Link>Anchor */}
            <AnchorLink to="/bio/#course">course</AnchorLink>
            
            {/* <Link to="/">soft skills</Link> */}
            <AnchorLink to="/bio/#soft-skills">soft skills</AnchorLink>

            {/* <Link to="/">tech stack</Link> */}
            <AnchorLink to="/bio/#technology-stack">tech stack</AnchorLink>
          </div>
        </li>
        <li>
          <Link to="/portfolio" activeStyle={{ color: "#e8e8e8" }} >
            portfolio <Icon icon={portfolioIcon} />
          </Link>
        </li>
        <li>
          <Link to="/contact" activeStyle={{ color: "#e8e8e8" }} >
            contact <Icon icon={envelopeIcon} />
          </Link>
        </li>
      </StyledUl>
    </menu>
  )
}

export default LinkList
