import React, { useRef, useEffect, useState } from "react";
import LinkWrapper from "../../styles/home/StyledLinkWrapper";
import gsap from "gsap";
import {Link} from "gatsby";

import useHover from '../../helpers/hooks/useHover';

const AnimatedLink = props => {
  const [linkRef, svgRef, isHovered] = useHover();

  return (
    <LinkWrapper>
      <svg
        width="81"
        height="23"
        viewBox="0 0 81 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        className={props.name}
      >
        <path
          d="M4.44906 23L0 7.6667L65.1951 0L81 5.33335V13.3334L4.44906 23Z"
          fill="#99D4F5"
        />
      </svg>
      <Link
        to={props.toPage}
        className={props.name}
        ref={linkRef}
      >
        {props.name}
      </Link>
    </LinkWrapper>
  )
}

export default AnimatedLink
